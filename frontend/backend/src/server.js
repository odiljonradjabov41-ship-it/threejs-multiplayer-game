const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const UserPosition = require('./models/UserPosition');

const app = express();
app.use(cors());
app.use(express.json());

// HTTP server va Socket.io yaratish
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] }
});

// MongoDB ulanishi
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/threejs_game')
  .then(() => console.log('MongoDB ga ulandi!'))
  .catch(err => console.error(err));

// --- SOCKET.IO MULTIPLAYER MANTIQI ---
const players = {}; // Barcha ulangan o'yinchilar lug'ati

io.on('connection', (socket) => {
  console.log(`Foydalanuvchi ulandi: ${socket.id}`);

  // O'yinchi harakatlanganda pozitsiyani qabul qilib, boshqalarga tarqatamiz
  socket.on('playerMove', (data) => {
    players[socket.id] = data;
    // O'sha foydalanuvchidan tashqari qolgan barchaga jo'natamiz
    socket.broadcast.emit('currentPlayersUpdate', { id: socket.id, ...data });
  });

  // O'yinchi chiqib ketganda
  socket.on('disconnect', () => {
    console.log(`Foydalanuvchi chiqib ketdi: ${socket.id}`);
    delete players[socket.id];
    // Boshqalarga bu o'yinchini o'chirishni aytamiz
    io.emit('removePlayer', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server ${PORT}-portda ishlamoqda...`));