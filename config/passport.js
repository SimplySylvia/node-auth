const 
passport = require('passport'),
passportJWT = require('passport-jwt'),
ExtractJwt = passportJWT.ExtractJwt,
Strategy = passportJWT.Strategy ,
config = require('./config'),
db = require('../models'),
User = db.User,
params = {  
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function() {  
    var strategy = new Strategy(params, (payload, callback) => {
        var user = User.findById(payload.id) || null
        if (user) {
            return callback(null, {
                id: user.id
            })
        } else {
            return callback(new Error("User not found"), null)
        }
    })
    passport.use(strategy)
    return {
        initialize: function() {
            return passport.initialize()
        },
        authenticate: function() {
            return passport.authenticate("jwt", {session: false})
        }
    }
}