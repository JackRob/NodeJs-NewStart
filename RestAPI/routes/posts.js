const EXPRESS = require('express')
const ROUTER = EXPRESS.Router()
const POST_MODEL = require('../models/Post')

//ROUTES

//GET ALL THE POSTS
ROUTER.get('/', async (req, res) => {
    try{
        const POSTS = await POST_MODEL.find()
        res.json(POSTS)
    }catch (err){
        res.json({message: err})
    }
})

ROUTER.get('/specific', (req, res) => {
    res.send('We are on the specific post')
})

//SBUMITS A POSTS
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

//SPECIFIC POST
ROUTER.get('/:postId', async (req, res)=> {
    try{
        const POST = await POST_MODEL.findById(req.params.postId)
        res.json(POST)
    }catch (err){
        res.json({message: err})
    }
})

//UPDATE POST
ROUTER.patch('/:postId', async (req, res) => {
    try {
        const POST = await POST_MODEL.updateOne(
            {_id: req.params.postId}, 
            { $set: {title: req.body.title }}
        )
        res.json(POST)
    }catch (err) {
        res.json({message: err})
    }
})

//DELETE SPECIFIC POST
ROUTER.delete('/:postId', async (req, res) => {
    try {
       const RM_POST = await POST_MODEL.remove({_id: req.params.postId})
       res.json(RM_POST)
        
    } catch (err){
        res.json({message: err})
    }
})

module.exports = ROUTER