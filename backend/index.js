const serverless = require("serverless-http");
const app = require("./app");

const handler = serverless(app);

export default {
  async fetch(request, env, ctx) {
    if (env) {
      for (const [key, value] of Object.entries(env)) {
        process.env[key] = value;
      }
    }
    return handler(request, env, ctx);
  },
};
