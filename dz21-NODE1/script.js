const http = require('http');

let counterMainPage = 0;
let counterAboutPage = 0;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            ++counterMainPage;
            res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
            res.write('<h1>Main Page</h1>');
            res.write('<p>show: ' + counterMainPage + '</p>');
            res.end('<p><a href="/about">about page</a><p>');
            break;
        case '/about':
            ++counterAboutPage;
            res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
            res.write('<h1>About page</h1>');
            res.write('<p>shown: ' + counterAboutPage + '</p>');
            res.end('<a href="/">main page</a>');
          break;
        default:
            res.writeHead(404, {'Content-Type' : 'text/html; charset=UTF-8'});
            res.write('<h1>404</h1>')
            res.end('<a href="/">main page</a>');    
          break;
      }
});

const port = 3000;
server.listen(port);


