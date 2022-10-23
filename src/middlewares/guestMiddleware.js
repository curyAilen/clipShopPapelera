function guestMiddleware(req, res, next) {
    if (req.session.login) {
        res.redirect('/cuenta');
    }

    next();
}

module.exports = guestMiddleware;