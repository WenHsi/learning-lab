start();
async function start() {
    document.querySelector("#submit").addEventListener('click', async () => {
        const sendData = document.querySelector("#req").value;
        const gzipData = await gzipCompress(sendData);
        const response = await postData('http://localhost:3000/getData', gzipData);
        document.querySelector("#res").value = response;
    })
}

async function postData(url, data) {
    const res = await fetch(url, {
        headers: {
            'Content-Encoding': 'gzip',
            'Content-Type': 'application/octet-stream',
        },
        body: data,
        method: 'POST'
    })
    return res.text();
}

function gzipCompress(data) {
    const encoder = new TextEncoder();
    const encode = encoder.encode(data);
    const readableStream = new Blob([encode], { type: "application/json"} ).stream();
    const compressedStream = readableStream.pipeThrough(new CompressionStream('gzip'));
    const compressedArrayBuffer = new Response(compressedStream).arrayBuffer();
    return compressedArrayBuffer;
}