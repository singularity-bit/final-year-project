const http=require('http');

const server=http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>hello</h1>')
    console.log("server running")
})
server.listen(3000);