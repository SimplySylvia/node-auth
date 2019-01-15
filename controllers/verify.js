const 
config = require('../config/config'),
jwt = require('jsonwebtoken')

module.exports = {
  verify: (req, res) => {
    console.log(config.jwtSecret)
    let verified= jwt.verify(req.token, config.jwtSecret)
    console.log("verified: ", verified)
    res.json(verified)
  }
}