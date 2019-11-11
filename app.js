const http = require('http') //imports the http module from Node
const express = require('express')  // imports the express module 
const app = express()

require('dotenv').config({ path: '.env' })

app.get('/', function(req, res){
  res.end('Home Page')

})

app.get('/about', function(req, res){
    res.end('About Page')
    
  })

app.get('/craig', function(req, res){
    res.end('Craig Page')
    
  })

app.use(function(req, res){
    res.statusCode = 404
    res.end('Not Found')
    
  }) 

const server = http.createServer(app)
server.listen(process.env.PORT)

