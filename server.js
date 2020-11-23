const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('country.json');
const routerImages = jsonServer.router('image');

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3010;

server.use(middlewares);
server.use(router, routerImages);

server.listen(port);
