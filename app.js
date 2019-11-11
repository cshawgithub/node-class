const http = require('http') //imports the http module from Node
const express = require('express')  // imports the express module 
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')

const mongoose = require('mongoose')

const app = express()

require('dotenv').config({ path: '.env' })
//after app gets started, connect to db
//mongoose.connect('mongodb://localhost:27017/node-class', { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})


const publicRouter = require('./routes/publicRouter')



//Define the static files folder (for images, styles, javaScript, etc.)

const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath)) //Middleware for catching requests


//Get Templating working 
//Tell express how to render our views and where to find them
app.set("views", path.resolve(__dirname, "views")) 
app.set("view engine", "ejs") //declaring we are using ejs

app.use(logger("dev"))//uses Morgan logger - for debugging
app.use(bodyParser.urlencoded({extended: false})) //content in usable format without heading extras

/*
var entries = []
//tell app we want entries added to local property passed to each view
app.locals.entries = entries


app.use(function(req, res, next){
  req.entries = entries
  next()  //tells it to go onto the next, otherwise browser hangs up
})
*/

//Wire up the router
app.use('/', publicRouter)



//Catch all errors
app.use(function(req, res){
    res.status = 404
    res.render("404")   
  }) 

const server = http.createServer(app)
server.listen(process.env.PORT)

