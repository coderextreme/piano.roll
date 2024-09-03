import express from 'express';
import http from 'http';
import { Server as SocketIoServer } from 'socket.io';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app = express();
const server = http.createServer(app);
const io = new SocketIoServer(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname));

server.listen(1337);

io.on("connection", function(socket) {
  console.log('+ client connected');
  return socket.emit("hello", {
    message: "Hello Earthling",
    data: {
      any_dummy_date: {
        can_come_here: true
      }
    }
  });
});

export default function(message) {
  return io.sockets.send(message);
};

