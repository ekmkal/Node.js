/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http'), fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
  	// YOUR CODE GOES IN HERE
	if (req.url === '/') {
		const contentHtml = fs.readFileSync('./index.html', 'utf-8');
		res.setHeader('Content-Type', 'text/html');
		res.end(contentHtml);
	};
	
	if (req.url === '/index.js') {
		const contentJs = fs.readFileSync('./index.js', 'utf-8');
		res.setHeader('Content-Type', 'text/javascript');
		res.end(contentJs);
	};
	
	if (req.url === '/style.css') {
		const contentCss = fs.readFileSync('./style.css', 'utf-8');
		res.setHeader('Content-Type', 'text/css');
		res.end(contentCss);
	};
});

server.listen(3000); // The server starts to listen on port 3000