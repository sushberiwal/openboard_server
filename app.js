// create a new folder server
// create a new file app.js
// npm init -y
// npm install express => used to create server is easy steps
// socket io
// npm install socket.io

const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);



// api
// app.get("/home" , function(req,res){
//     res.end("All Posts !! !!!");
// })

// jab bhi koe client connect hoga to this event will fire !!
io.on('connection', function(socket){
   console.log(`${socket.id} connected !!!`);
   
   socket.on("md" , function(point){
    socket.broadcast.emit('onMouseDown', point);
   })

   socket.on("mm" , function(point){
    socket.broadcast.emit('onMouseMove', point);
   })

});
  
let port = process.env.PORT || 3000;
http.listen(port, () => {
  console.log('server started');
});


//TCP port => to identify server uniquely 
// IP address => to identify machine on a network uniquely