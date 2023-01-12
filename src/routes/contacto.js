const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const config = require("../../config");

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

module.exports = router;