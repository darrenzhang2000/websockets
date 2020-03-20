var express = require('express')
var socket = require('socket.io')

var app = express()
var server = app.listen(4000, ()=>{
    console.log('listening at port 4000')
})

app.use(express.static('public'))

//socket setup
var io = socket(server) //we want socket.io to work on this server
io.on('connection', (socket)=>{
    console.log('socket connected', socket.id)

    socket.on('chat', (data)=>{
        console.log('prickly pear')
        io.sockets.emit('chat', data)
    })

    socket.on('clicking', (data)=>{
        console.log('Quince')
        socket.broadcast('typing', data)
    })
})