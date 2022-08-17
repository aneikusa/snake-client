const setupInput = (conn) => {
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

module.exports = {setupInput};