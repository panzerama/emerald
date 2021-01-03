/** 
 * One of the important benefits of Node is that it provides a host of tools
 * for rapidly developing backend services. Taking advantage of these libraries
 * is relatively painless.
 * 
 * First, we need to import the tools we need from Node's http library.
 */

const http = require('http');

/** 
 * Now we set up the function that will handle incoming requests. We save this
 * function as a variable so that we can pass it as a parameter later.
 * 
 * This function expects two arguments, representing the request and response
 * objects. 
 */
const requestListener = function (req, res) {
  /** 
   * These objects are how we interact with the request-response cycle. For 
   * instance, we may want to read data from the request body. In this case
   * we listen for the `data` event. When it occurs, we print out a chunk of
   * data to the console.
   */
  req.on('data', chunk => {
    console.log(`Data chunk available: ${chunk}`)
  })

  /** 
   * When the `end` event fires, we know we've reached the end of the data and
   * can take whatever action we think is appropriate.
   */
  req.on('end', () => {
    //do something
  })

  /** 
   * Of course, it wouldn't be a request-response cycle without a response. We 
   * can write the status code and message payload for the response here.
   */
  res.writeHead(200);
  res.end('Hello, World!');
}

/**
 * We pass this listener function to the http server, which will invoke it any
 * time a request is received. Node keeps track of callbacks like this and 
 * activates them at the appropriate time. This is a trivial example of the 
 * event loop, at the core of Node.
 */

const server = http.createServer(requestListener);

/** 
 * Last, but not least, we have to tell the server which port to listen on. Much
 * like our examples of method chanining, this is invoking the `listen` function
 * on the server object we've created.
 */
server.listen(8080);