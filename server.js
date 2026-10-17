const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname);
const port = 5050;
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end("Method not allowed");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }

  const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
  const topLevelDirectory = relativePath.split(/[\\/]/, 1)[0];
  if (relativePath !== "index.html" && !["css", "js", "image"].includes(topLevelDirectory)) {
    response.writeHead(404).end("Not found");
    return;
  }

  const filePath = path.resolve(root, relativePath);
  if (filePath !== root && !filePath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError) {
      if (statError.code !== "ENOENT" && statError.code !== "ENOTDIR") {
        console.error(`Could not read ${pathname}:`, statError);
        response.writeHead(500).end("Internal server error");
        return;
      }
      response.writeHead(404).end("Not found");
      return;
    }
    if (!stats.isFile()) {
      response.writeHead(404).end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream"
    });
    if (request.method === "HEAD") {
      response.end();
      return;
    }

    const stream = fs.createReadStream(filePath);
    stream.on("error", (error) => {
      console.error(`Could not stream ${pathname}:`, error);
      if (!response.headersSent) response.writeHead(500);
      response.end("Internal server error");
    });
    stream.pipe(response);
  });
});

server.on("error", (error) => {
  console.error("Could not start TECHZONE server:", error.message);
  process.exitCode = 1;
});

console.log(`Starting TECHZONE server on http://localhost:${port}`);
server.listen(port, "127.0.0.1", () => {
  console.log(`TECHZONE server ready at http://localhost:${port}`);
});
