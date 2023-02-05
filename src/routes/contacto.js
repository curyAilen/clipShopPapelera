const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const config = require("../../config");
const db = require("../../database/models");
const jwt = require("jsonwebtoken");

// Crear transport
let transporter = nodemailer.createTransport({
    service: "gmail",
    host:"smtp.gmail.com",
    secure: false,
    auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.password
    }
});

router.post("/", (req, res) => {
    const { mail, nombre, asunto, mensaje } = req.body;
    const text = `De: ${nombre}   Email: ${mail}     Mensaje: ${mensaje}`
    
    let mailOptions = {
        from: mail,
        to: config.nodemailer.email,
        subject: `Mensaje de ${mail}. Asunto: ${asunto} `,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json(null);
        } else {
            console.log("Email enviado");
            res.status(200).json(req.body);
        }
    });
});

router.post("/enviarEmail", async (req, res) => {
    const { asunto, mensaje } = req.body;

    const emails = await db.Email.findAll();
    const emailsToSend = emails.map((email) => email.dataValues.email);

    let mailOptions = {
        from: config.nodemailer.email,
        to: emailsToSend,
        subject: asunto,
        text: mensaje
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json(null);
        } else {
            console.log("Email enviado");
            res.redirect("/user/cuenta");
        }
    });
});

router.post("/recuperar", async (req, res) => {
    const { email } =  req.body;
    const usuario = await db.Usuario.findOne({ where: { email } });

    if (!usuario) {
        return res.render("recuperarfeedback", { msg: "No existe ningun usuario registrado con ese email"});
    }; 


    const secret = config.jwt.secret + usuario.password;
    const payload = {
        id: usuario.idUsuarios,
        email: usuario.email
    };

    const token = jwt.sign(payload, secret, { expiresIn: "30m" });
    const link = `${config.main.url}/user/recuperar/${usuario.idUsuarios}/${token}`;

    let mailOptions = {
        from: config.nodemailer.email,
        to: usuario.email,
        subject: "Recuperar mi contraseña",
        text: `Ingresa a este link para cambiar de contraseña: ${link}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.render("recuperarfeedback", { msg: `Ha ocurrido un error, intentalo mas tarde`});
        } else {
            console.log("Email enviado");
            return res.render("recuperarfeedback", { msg: `Hemos enviado un link a tu correo: ${email}`});
        }
    });
});

module.exports = router;