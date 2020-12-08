const MONGOOSE = require('mongoose')

const POST_SCHEMA = MONGOOSE.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = MONGOOSE.model('Posts', POST_SCHEMA)