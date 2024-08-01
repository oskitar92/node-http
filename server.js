
const http = require('http');
const data = require('./data');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${data.title}</title>
      </head>
      <body>
        <h1>${data.title}</h1>
        <h2>${data.subtitle}</h2>
        <p>${data.description}</p>
        <footer>${data.footer}</footer>
      </body>
    </html>
  `;

  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
