const { IP, PORT, USERID} = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${USERID}`);
  })

  return conn;
};


// console.log("Connecting ...");
// connect();

module.exports = {connect};