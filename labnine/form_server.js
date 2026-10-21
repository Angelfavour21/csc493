const http = require("http");
const querystring = require("querystring");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const parsedBody = querystring.parse(body);
      const name = parsedBody.name;
      const email = parsedBody.email;
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(`<h1>Form Submitted Successfully</h1><p>Name:
${name}</p><p>Email: ${email}</p>`);
    });
  } else {
    res.statusCode = 405;
    res.setHeader("Content-Type", "text/plain");
    res.end("Method Not Allowed");
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
