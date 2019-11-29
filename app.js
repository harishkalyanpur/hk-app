const http = require('http');
const GIT_COMMIT_SHA = process.env.GIT_COMMIT
const hostname = '0.0.0.0';
const port = 8080;
const output =	{ AppName: 'HK Apps',
		  Version: '1.0', 
		  git_commit_sha: GIT_COMMIT_SHA,
		}
const server = http.createServer((req, res) => {
	if (req.url == '/') { //check the URL of the current request
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: "Welcome to the index page"}));  
            res.end();  
    	}
    	else if (req.url == "/info") {
            res.writeHead(200, { 'Content-Type': 'application/json' });
	    res.write(JSON.stringify({output}));
            res.end();
    	}
    	else
            res.end('Invalid Request!');
});

server.listen(port, hostname, () => {
    console.log('Server running at http://%s:%s/', hostname, port);
});

process.on('SIGINT', function() {
    console.log('Caught interrupt signal and will exit');
    process.exit();
});
