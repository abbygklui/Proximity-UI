const http = require('http');
const fs = require('fs');
const path = require('path');
const SerialPort = require('serialport');
const parsers = SerialPort.parsers;
const cors = require('cors'); // Add this line
const express = require('express'); // Add this line

const app = express(); // Replace the previous 'app' declaration with express

app.use(cors()); // Allow all origins - you can configure specific origins if needed

const parser = new parsers.Readline({
    delimiter: '\r\n'
});

const port = new SerialPort('/dev/cu.usbmodem142201', {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000", // Ensure this matches your React app's URL
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Node is listening to port');
});

parser.on('data', (data) => {
    console.log('Received data from port: ' + data);
    io.emit('data', data);
});

server.listen(4000, () => {
    console.log('Server is listening on port 4000');
});
