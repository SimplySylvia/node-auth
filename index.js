const 
express = require('express'),
parser = require('body-parser'),
cors = require('cors'),
passport = require('./config/passport')(),
routes = require('./routes')


const app = express()

// middleware
app.use(cors())
app.use(parser.json())
app.use(passport.initialize())

// routes
app.use('/users', routes.user)
app.use('/verify', routes.verify)

//server connection
app.listen(3001, () => console.log('Listening on port 3001 for AUTH'))