const express = require('express');
// server.use(cors());

const router = require('./routes');

// server.use(cors());
// server.use(morgan('dev'));
// server.use(router);
const server = express();

server.use('/api', router);

const PORT = 8042;
server.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port ${PORT} !`);
});

module.exports = server;

// const express = require('express');
// const cors = require('cors');
// const server = express();
// const bodyParser = require('body-parser');
// const morgan = require('morgan');

// const router = require('./routes');

// // Middleware
// server.use(cors());
// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({ extended: true }));
// // ici on appelle les routes du dossier routes
// server.use(morgan('dev'));
// server.use(router);
