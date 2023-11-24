const http = require('http');
const port = process.env.port || 3000

http.createServer((req, res)=>{
    res.write('Hello Dunia');
    res.end();
}).listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})