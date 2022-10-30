const isLoggedIn = (req, res, next) => {
    if (req.user) {
        res.isLoggedIn = true
      next();
    } else {
      res.isLoggedIn = false
      next()
    }
  }
  module.exports = isLoggedIn