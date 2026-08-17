const { Readable, Writable } = require("stream");
const app = require("./app");

function requestToNodeReq(request, url) {
  const req = new Readable({
    read() {},
  });

  req.method = request.method;
  req.url = url.pathname + url.search;
  req.headers = {};
  for (const [key, value] of request.headers.entries()) {
    req.headers[key.toLowerCase()] = value;
  }

  return req;
}

function createNodeRes() {
  const res = new Writable({
    write(chunk, encoding, callback) {
      if (this.bodyChunks) {
        this.bodyChunks.push(chunk);
      }
      callback();
    },
  });

  res.statusCode = 200;
  res.headers = {};
  res.bodyChunks = [];
  res.headersSent = false;

  res.setHeader = function (name, value) {
    res.headers[name.toLowerCase()] = value;
  };

  res.getHeader = function (name) {
    return res.headers[name.toLowerCase()];
  };

  res.removeHeader = function (name) {
    delete res.headers[name.toLowerCase()];
  };

  res.writeHead = function (statusCode, headers) {
    res.statusCode = statusCode;
    if (headers) {
      for (const [k, v] of Object.entries(headers)) {
        res.setHeader(k, v);
      }
    }
    res.headersSent = true;
  };

  res.status = function (code) {
    res.statusCode = code;
    return res;
  };

  return res;
}

export default {
  async fetch(request, env, ctx) {
    if (typeof globalThis.process === "undefined") {
      globalThis.process = { env: {} };
    } else if (!globalThis.process.env) {
      globalThis.process.env = {};
    }

    if (env) {
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          try {
            process.env[key] = value;
          } catch (e) {}
          try {
            globalThis.process.env[key] = value;
          } catch (e) {}
          try {
            Object.defineProperty(process.env, key, {
              value: value,
              writable: true,
              configurable: true,
              enumerable: true,
            });
          } catch (err) {}
        }
      }
    }

    const url = new URL(request.url);
    const req = requestToNodeReq(request, url);
    const res = createNodeRes();

    const responsePromise = new Promise((resolve) => {
      res.on("finish", () => {
        const body = Buffer.concat(res.bodyChunks);
        resolve(
          new Response(body, {
            status: res.statusCode,
            headers: res.headers,
          })
        );
      });

      res.on("error", (err) => {
        resolve(
          new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "content-type": "application/json" },
          })
        );
      });
    });

    if (request.method !== "GET" && request.method !== "HEAD") {
      const buffer = await request.arrayBuffer();
      if (buffer.byteLength > 0) {
        req.push(Buffer.from(buffer));
      }
    }
    req.push(null);

    try {
      app(req, res);
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "content-type": "application/json" },
      });
    }

    return responsePromise;
  },
};
