const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const config = require("../../config");
const db = require("../../database/models");
const jwt = require("jsonwebtoken");
const imgLogoClipShop = "https://scontent.faep8-2.fna.fbcdn.net/v/t39.30808-6/211403422_280522243870057_4416337119259929928_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=txsbxrepJi0AX8Cp_Nh&_nc_ht=scontent.faep8-2.fna&oh=00_AfDlkhrhJd2VenMnrdeVIlW0uA7ynqXlhnB4EAT9GU_aLw&oe=640569C1"

// Crear transport
let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
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
    const { email } = req.body;
    const usuario = await db.Usuario.findOne({ where: { email } });

    if (!usuario) {
        return res.render("recuperarfeedback", { msg: "No existe ningun usuario registrado con ese email" });
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
        text: `Ingresa a este link para cambiar de contraseña: ${link}`,
        html: `
            <head>
                <style>
                    body {
                        background-color: #fffcfa;
                    }
                
                    a:link a:visited a:active a:hover {
                        background-color: #f7c959;
                        border: none;
                        border-radius: 5px;
                        color: rgb(255, 245, 238);
                        font-weight: 600;
                        box-shadow: 5px 6px 15px 0px rgba(0, 0, 0, 0.30);
                        font-size: 26px;
                        text-decoration: none;
                    }

                    img{
                        max-width: 500px;
                    }
                </style>
            </head>
            <h1 style="color: #5424B2; font-weight: 600">
                Recupera tu contraseña
            </h1>
            <h3>Estimado, si usted recordó su contraseña o no solicitó el cambio de la misma, ignore este mensaje.</h3>
            <div>
                <a href="${link}">RECUPERAR</a>
            </div>
            <img src="${imgLogoClipShop}">
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.render("recuperarfeedback", { msg: `Ha ocurrido un error, intentalo mas tarde` });
        } else {
            console.log("Email enviado");
            return res.render("recuperarfeedback", { msg: `Hemos enviado un link a tu correo: ${email}` });
        }
    });
});

module.exports = router;

/*
    Estimado, si usted recordó su contraseña o no solicitó el cambio de la misma, ignore este mensaje.
ahi te paso css que tengo:
énfasis lo uso para el titulo
.botones {
    background-color: #f7c959;
    border: none;
    border-radius: 5px;
    color: rgb(255, 245, 238);
    font-weight: 600;
    box-shadow: 5px 6px 15px 0px rgba(0, 0, 0, 0.30);
    font-size: 1rem;
}

.botones:hover {
    transition-duration: 0.8s;
    background-color: #5424B2;
    -webkit-animation-name: pulse;
    animation-name: pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    color: rgb(255, 245, 238);
}
.enfasis{
    color: #5424B2;
    font-weight: 600;
    }

*/