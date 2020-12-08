const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const POST_MODEL = require('../models/Post')

//ROUTES
ROUTER.get('/', (req, res) => {
    res.send('We are on home')
})

ROUTER.get('/specific', (req, res) => {
    res.send('We are on the specific post')
})

ROUTER.post('/', async (req,res) => {
    const POST = new POST_MODEL({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const SAVEDPOST = await POST.save()
        res.json(SAVEDPOST)
    } catch (err) {
        res.json({message: err})
    }

})

module.exports = ROUTER