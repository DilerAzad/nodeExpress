const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end("Welcome to home page");
        return;
    }
    else if(req.url === '/about'){
        res.end("We are the mutinational company");
        return;
    }

    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>OOPS!</h1> 
        <p>Page not found</p>`);
});

server.listen(3000);