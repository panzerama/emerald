const http = require('http');

const requestListener = function (req, res) {
  if (req.method === 'GET' && req.path === '/users') {
    // browser makes GET /users
    // this handles it
    res.write('<h1>Jason</h1>')
    res.end()
  } else if (req.method === 'POST' && req.path === '/') {
    // browser makes a POST /
    // this handles it

    // { answer: "Jason" }
    let buffer = "";
    req.on('data', chunk => {
      buffer += chunk;
    })

    // buffer === json payload
    req.on('end', () => {
      const thisObject = JSON.parse(buffer);
      const myName = thisObject.answer; // Jason

      res.write(`You sent the answer ${myName}`);
      res.end();
    })
  }
  // request object will emit events
  // 'data' 'end' 'connection'
  req.on('data', chunk => {
    console.log(`Data chunk available: ${chunk}`)
  })

  req.on('end', () => {
    //do something
  })

  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(4000);