let connection;

const setupInput = (conn) => {
  connection = conn;
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

  if (data === "w") {
    connection.write("Move: up");
  }

  if (data === "a") {
    connection.write("Move: left");
  }

  if (data === "s") {
    connection.write("Move: down");
  }

  if (data === "d") {
    connection.write("Move: right");
  }

  if (data === "h") {
    connection.write("Say: yo yo yoey sssnakes");
  }

  if (data === "b") {
    connection.write("Say: pce out hatersss");
  }

  if (data === "k") {
    connection.write("Say: kingsss");
  }
};

module.exports = {setupInput};