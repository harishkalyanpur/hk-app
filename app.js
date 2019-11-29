const http = require('http');
const hostname = '0.0.0.0';
const port = 8080;
const infoOutput ={ service_name: 'HK Apps',
		    version: '1.0', 
		    git_commit_sha: process.env.GIT_COMMIT
		}
const server = http.createServer((req, res) => {
	if (req.url == '/') { //check the URL of the current request
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: "Welcome to the index page"}));  
            res.end();  
    	}
    	else if (req.url == "/info") {
            res.writeHead(200, { 'Content-Type': 'application/json' });
	    res.write(JSON.stringify(infoOutput, null, "\t"));
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
