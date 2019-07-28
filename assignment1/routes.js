const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write(
      "<body><h3>Hello every one!</h3><hr><form method='POST' action='/create-user'><input name='user'><button type='submit'>CREATE NEW USER</button></form><body>"
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><ul><li>Saeid</li><li>Saman Banoo</li><li>Yahya</li><li>Turkie</li><li>Fatemeh</li></ul></body>"
    );
    res.write("</html>");
    res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const data = Buffer.concat(body)
        .toString()
        .split("=")[1];
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head><body>");
      res.write(data);
      res.write("</body></html>");
      return res.end();
    });
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<body>You want to create new user</body>");
    res.write("</html>");
    res.end();
  }
};

exports.handler = requestHandler;
