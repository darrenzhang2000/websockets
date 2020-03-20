var express = require('express')

var app = express()
var server = app.listen(4000, ()=>{
    console.log('listening at port 4000')
})

app.use(express.static('public'))