var http = require('http');
var file = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
		if (request.method === 'GET' && request.url === '/') {
			response.setHeader("Content-Type", "text/html; charset=utf-8");
			file.readFile('./index.html', 'utf-8', function(err, data){ 
				response.write(data);
				response.end();
			});
		} else {
			response.statusCode = 404;
			response.setHeader('Content-Type', 'image/jpg');
			file.readFile('https://www.corinthcsd.org/resources/front/images/404-img.png', function(err, data){ 
				response.write(data);
				response.end();
			});
		}
	});

server.listen(8080);