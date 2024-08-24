var SerialPort = require("serialport");
const Readline = require('@serialport/parser-readline');

const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: "\r\n",
});

var port = new SerialPort('/dev/cu.usbmodem142201', {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

parser.on('data', function (data) {
    console.log(data);
});