const express = require('express');

const router = require('./routes');

const server = express();

server.use('/api', router);

const PORT = 8042;
server.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port ${PORT} !`);
});
