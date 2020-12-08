const JSONFILE = require('jsonfile')
const PATH = "./DB/users.json"
// Here we have all of your route
module.exports = APP => {

    // READ USER
    APP.get("/users", (req, res) => {
        console.log("fetching all users")
        
        JSONFILE.readFile(PATH, (err, content) => {
            res.send(content)
        })
        // request data from server and save in cars variable
    })

    // ADDING NEW USER
    APP.post('/users/new', (req, res)=> {
        let {email, username} = req.body

        JSONFILE.readFile(PATH, (err, content) => {
            content.push({ email, username})
            console.log(`added ${email} to DB`)

            JSONFILE.writeFile(PATH, content, (err) => {
                console.log(err)
            })

            res.sendStatus(200)
        })
    })

    // DELETING USER
    APP.delete('/users/destroy', (req, res) => {
        let email = req.body.email

        JSONFILE.readFile(PATH, (err, content) => {
            for (let i= 0; i < content.length; i++){
                if(content[i].email === email){
                    console.log(`Deleting ${content[i].username} from DB`)
                    content.pop(i)
                }
            }

            JSONFILE.writeFile(PATH, content, (err)=> {
                console.log(err)
            })
            res.sendStatus(200)
        })
    })
}
