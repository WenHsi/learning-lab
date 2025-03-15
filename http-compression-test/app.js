const http = require("http");
const fs = require("fs").promises;
const zlib = require("zlib");

const server = http.createServer(async(req, res) => {
    if (req.url === "/") {
        const file = await fs.readFile(__dirname + "/index.html");
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.write(file);
        res.end();
        return;
    } else if (req.url === "/index.js") {
        const file = await fs.readFile(__dirname + "/index.js");
        res.setHeader("Content-Type", "application/javascript");
        res.writeHead(200);
        res.write(file);
        res.end();
        return;
    } else if (req.url === "/getData") {
        if (req.method === "POST") {
            let chunks = [];

            // Decoding request body
            const stream = req.pipe(zlib.createGunzip());

            stream.on('data', (chunk) => {
                chunks.push(chunk);
            })
            stream.on('end', async () => {
                const buffer = Buffer.concat(chunks);
                try {
                    console.log("Successfully parsed the request body:", buffer.toString().slice(0, 100) + "....");

                    let resData = `{ version: '1.0', distractedStudents: { distractedStudents: [] } }`; // or { Error: 'No info provided' }
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Content-Encoding', 'gzip');
                    res.writeHead(200);
                    // Encoding response body
                    const gzip = zlib.createGzip();
                    gzip.pipe(res);
                    gzip.end(resData);
                    return;
                } catch (err) {
                    console.log(err);
                    res.setHeader('Content-Type', 'application/json');
                    res.writeHead(500);
                    res.end(JSON.stringify({ Error: 'Unsupported request version' }));
                    return;
                }
            })
            stream.on('error', (err) => {
                res.writeHead(400);
                res.end("Error!" + JSON.stringify(err));
                return;
            })
            return;
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(400);
            res.end(JSON.stringify({ Error: 'Access forbidden' }));
            return;
        }
    }
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(404);
    res.end("404 Not Found");
    return;
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port.`);
});