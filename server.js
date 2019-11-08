const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/txt') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('text')
    } else if (req.url === '/json') {
        res.writeHead(200, { 'Content': 'application/json' })
        res.end(JSON.stringify({ code: 1, list: [1, 2, 3] }))
    } else if (req.url === '/jpg') {
        res.writeHead(200, { 'Content': 'image/jpeg' })
        let imgbuf = fs.readFileSync('./1.jpg')
        res.end(imgbuf)
    } else {
        res.end('ok')
    }
})
server.listen(process.env.PORT || 9696, () => {
    console.log("服务已启动");
})