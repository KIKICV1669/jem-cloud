require('dotenv').config();
const Server = require('./models/Server');

const expressServer = new Server();

console.log('Hola mundo');

expressServer.listen();