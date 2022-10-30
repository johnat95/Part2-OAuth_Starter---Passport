const router = require('express').Router()
const axios = require('axios')
const passport = require('passport')

const passportSetup = require('./middleware/config_passport')

//const isLoggedIn = require('./middleware/auth')
// Routes
router.get('/', (req, res) => {
    res.render('pages/index' , {userData: req.user, logged_in: (req.user !== undefined)});
});

router.get('/about', (req, res) => {
    res.render('pages/about', {userData: req.user, logged_in: (req.user !== undefined)});
    
});

router.get('/auth/github', passport.authenticate('github', {
    scope:['user']
}))


router.get('/auth/github/callback', passport.authenticate('github'), (req,res) => {
    try{
        
    res.render('pages/portal_home',{userData: req.user, logged_in: (req.user !== undefined)})
    }catch(exception){
        console.log(exception)
    }
})


router.get('/logout', (req, res) => {
   
    res.redirect('/')
});


module.exports = router;


