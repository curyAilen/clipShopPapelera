function authMiddleware(req, res, next) {
    if (!req.session.login) {
        res.redirect('/user/login');
    }

    next();
}

module.exports = authMiddleware;