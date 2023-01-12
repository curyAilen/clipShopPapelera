const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    nodemailer: {
        email: process.env.GMAIL,
        password: process.env.GMAIL_APP_PASS
    }
}

