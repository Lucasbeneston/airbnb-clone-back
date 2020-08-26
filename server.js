const express = require('express');
require('express-async-errors');
const cors = require('cors');
const router = require('./routes');

const server = express();

server.use('/api', router);
server.use(cors());

server.listen('8042', () => {
  console.log(`Le serveur est lancé sur le port 8042 !`);
});

module.exports = server;
