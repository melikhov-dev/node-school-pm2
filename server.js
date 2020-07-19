const http = require('http');
const pid = process.pid;

const server = http.createServer((req, res) => {
    console.log(`Request received. Pid: ${pid}`);
    res.end(`Hello from Node.js! Pid: ${pid}`);
}).listen(8800, () => {
    console.log(`Server started. Pid: ${pid}`);
});

process.on('SIGINT', () => {
    console.log(`Server closed. Pid: ${pid}`);
    server.close(() => {
        process.exit();
    })
})
