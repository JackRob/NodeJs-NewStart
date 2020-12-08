const EXPRESS = require('express')
const JSONFILE = require('jsonfile')
const PARSER = require('body-parser')
const APP = EXPRESS()

APP.use(PARSER.json())

require('./routes/userRoutes')(APP) 

const PORT = 5000


APP.listen(PORT, () => {
    console.log("Server running")
})


