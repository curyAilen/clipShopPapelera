const mercadopago = require("mercadopago");
const config = require("./config");

mercadopago.configure({
    access_token: config.mercadopago.accessToken
});

module.exports = {
    mercadopago
};  