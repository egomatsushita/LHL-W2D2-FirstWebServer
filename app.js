const http = require('http');
const PORT = 8080

// a function which handles requests and send response
function requestHandlers(request, response) {
  response.end(`Requested Path: ${request.url}\nRequested Method: ${request.method}`);
}

var server = http.createServer(requestHandlers);

server.listen(PORT, () => {
  console.log(`Server listeing on: http://localhost:${PORT}`);
})