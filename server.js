const express = require('express')
const app = express()

app.get('/', function(req, res, next){
    res.set('Content-Type', 'text/html; charset=utf-8')
    res.send("<h1>Hello from Node JS APP!!!</h1>")
})

app.listen(process.env.PORT || 4567);