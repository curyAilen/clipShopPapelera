const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    main: {
        url: "http://localhost:3000"
    },
    jwt: {
        secret: process.env.JWT_SECRET || "secret12345"
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

