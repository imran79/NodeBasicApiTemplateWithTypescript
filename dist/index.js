"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const debug = require("debug");
const App_1 = require("./App");
debug('ts-express:server');
const port = parseInt(process.env.PORT, 10) || 5000;
//const port = normalizePort(process.env.PORT || 3000);
App_1.default.set('port', port);
const server = http.createServer(App_1.default);
App_1.default.listen(port, () => {
    console.log("Node app is running at localhost:" + port);
});
//server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(portNum) {
    let port = (typeof (portNum) === 'string') ? parseInt(portNum) : portNum;
    if (isNaN(port))
        return port;
    else if (port > 0)
        return port;
    else
        return false;
}
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;
    let bind = (typeof (port) === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    let addr = server.address();
    let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}
//# sourceMappingURL=index.js.map