const http = require('http');

// function yang didalam parameter disebut callback function
// unnamed function
const server = http.createServer( function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<h1>Hello Arif!</h1>');
  response.end();
})

// arrow function
// const server = http.createServer( (request, response) => {
//   }
// )
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`)
})