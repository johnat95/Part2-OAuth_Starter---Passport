const passport = require('passport')
const GitHubStratagy = require('passport-github2')

//environment variables
require('dotenv').config()
const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

passport.serializeUser((user,cb)=>{
    
    var obj = {
        name: user.displayName,
        username: user.login,
        pubRepos: user.public_repos,
        reposUrl: user.repos_url,
        avatarUrl: user.avatar_url
    }
    return cb(null, obj)
    
})

passport.deserializeUser((user, cb)=>{
    process.nextTick((user)=>{
        return cb(null, user)
    })
})

passport.use(
    new GitHubStratagy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: '/auth/github/callback'
    }, (access_token, refresh_Token, user, done)=>{
       
        done(null, user)
    }
))