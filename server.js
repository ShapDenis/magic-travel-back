const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('country.json');
// server.use(jsonServer.rewriter({
//     '/image/:id': './public/assets/images/Img_1.png'
// }))

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3010;

server.use(middlewares);
server.use(router);

server.listen(port);
