import http from "http";
import { initLogger, logInfo } from "./utils/Logger.js";

const port = 8000;

initLogger(2);

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end("Hello World");
};

const server = http.createServer(requestListener);
server.listen(port);

logInfo(`The server is listening on port ${port}`);
