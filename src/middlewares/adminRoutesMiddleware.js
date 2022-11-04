function adminRoutes(req, res, next) {

    if (!res.locals.admin) {
        res.redirect("/tienda")
    }

    next();
}

module.exports = adminRoutes;