const EXPRESS = require('express')
const MONGOOSE = require('mongoose')
const APP = EXPRESS()
const PARSER = require('body-parser')
require('dotenv/config')

APP.use(PARSER.json())

//ROUTEUR IMPORT
const POST_ROUTE = require('./routes/posts')

APP.use('/posts', POST_ROUTE)

//CONNECT DB
MONGOOSE.connect(process.env.DB_CONNECTION, 
                { useNewUrlParser: true }, () => {
    console.log('Connected to DB !')
})
APP.listen(3000)