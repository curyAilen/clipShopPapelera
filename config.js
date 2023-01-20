const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    main: {
        url: "http://localhost:3000"
    },
    nodemailer: {
        email: process.env.GMAIL,
        password: process.env.GMAIL_APP_PASS
    },
    mercadopago: {
        accessToken: process.env.MP_ACCESS_TOKEN,
        publicKey: process.env.MP_PUBLIC_KEY
    }
}

