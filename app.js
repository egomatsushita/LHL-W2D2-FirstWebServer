const http = require('http');
const PORT = 8080

// a function which handles requests and send response
function requestHandlers(request, response) {
  // response.end(`Requested Path: ${request.url}\nRequested Method: ${request.method}`);

  if (request.url === '/') {
    response.end("Welcome");
  } else if (request.url === '/urls') {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.statusCode = 404;
    response.end("Unknown Path");
  }
}

var server = http.createServer(requestHandlers);

server.listen(PORT, () => {
  console.log(`Server listeing on: http://localhost:${PORT}`);
})