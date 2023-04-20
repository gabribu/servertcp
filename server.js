const net = require('net');

const server = net.createServer(con => {
    con.write("He recibido una conexion");
    console.log("[!] Conexión");
    con.pipe(con);
});

server.listen(3000, '127.0.0.1');