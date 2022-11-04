function guestMiddleware(req, res, next) {
    if (req.session.login) {
        res.redirect('/user/cuenta');
    }

    next();
}

module.exports = guestMiddleware;