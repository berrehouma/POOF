const http = require('http');
const circle = require('./circle');

const server = http.createServer((req, res) => {
    if (req.url === '/circle' && req.method === 'GET') {
        const radius = 5; // Hardcoded for now
        const area = circle.area(radius);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Area of the circle with radius 5 is ' + area + '\n');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 - Not Found\n');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});