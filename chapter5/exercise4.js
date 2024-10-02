const http = require("http");

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

const server = http.createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 - Not Found\n");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
