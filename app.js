const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><p>Welcome to my page</p><form action="create-user" method="post"><input type="text" name="username"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end()
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><ul><li>User1</li><li>User2</li></ul></body>');
    res.write('</html>');
    return res.end()
  }
  if (url === '/create-user') {
    const body = [];
    const method = req.method;
    console.log(method); //POST
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); //username = xxxxxxxxx  ---> [username, xxxxxxxxx] --> [1] = xxxxxxxxx

    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }

});


server.listen(3000);