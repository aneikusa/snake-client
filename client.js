const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port:  50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: S.A`);
  })

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    
    stdin.on("data", handleUserInput);

    return stdin;
  };

  const handleUserInput = (data) => {
    connection.setEncoding("utf8");
      if (data === "\u0003") {
        process.exit();
    }
  };

  return conn;
};


console.log("Connecting ...");
connect();

module.exports = connect;