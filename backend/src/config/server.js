const port  = 3003
const  bodyParser = require('body-parser')
const express = require('express')

const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`BACKEND is runing on port ${port}.`)
})
//module.exports = () =>{
//    const app = express();
//    app.use(express.urlencoded({extended: true}))
//    app.use(express.json())

//    return app
//}
module.exports = server
