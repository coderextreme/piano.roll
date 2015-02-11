express = require('express');
app = express();
http = require('http').Server(app);
io = require('socket.io')(http);

app.use(express.static(__dirname));

io = require("socket.io")(http)
fs = require("fs")

http.listen 1337

io.on "connection", (socket) ->

  console.log '+ client connected'

  socket.emit "hello",
    message: "Hello Earthling"
    data   : any_dummy_date: can_come_here: on


module.exports = ( message ) -> io.sockets.send message
