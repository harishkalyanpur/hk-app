const http = require('http');
const hostname = '0.0.0.0';
const port = process.env.service_port;
const infoOutput ={ service_name: 'HK Apps',
		    version: '1.0', 
		    git_commit_sha: process.env.GIT_COMMIT,
		        environment: {
			   service_port: process.env.service_port,
			   log_level: process.env.log_level,
		   	}
		}
const server = http.createServer((req, res) => {
	if (req.url == '/') { //check the URL of the current request
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write("Welcome to the index page \n");  
            res.end();  
    	}
    	else if (req.url == "/info") {
            res.writeHead(200, { 'Content-Type': 'application/json' });
	    res.write(JSON.stringify(infoOutput, null, "\t"));
	    res.write("\n");
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
