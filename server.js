const express = require('express');
// const cors = require('cors');
// const morgan = require('morgan');
const router = require('./routes');

const server = express();

server.use('/api', router);
// server.use(cors());
// server.use(morgan('dev'));
// server.use(router);

const PORT = 8042;
server.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port ${PORT} !`);
});

module.exports = server;

// // CODE A TESTER PLUS TARD
// const express = require('express');
// const cors = require('cors');
// const server = express();
// const bodyParser = require('body-parser');
// const morgan = require('morgan');

// const router = require('./routes');

// server.use(cors());
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(morgan('dev'));
// server.use(router);
