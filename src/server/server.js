require("dotenv").config();
const Hapi = require("@hapi/hapi");
const routes = require("../server/routes");
const loadModel = require("../services/modelService");
const InputError = require("../exception/InputError");

(async () => {
  const server = Hapi.server({
    port: process.env.APP_PORT || 8000,
    host: process.env.APP_HOST || "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
      payload: {
        maxBytes: 1 * 1024 * 1024,
      },
    },
  });
  const model = await loadModel();
  server.app.model = model;

  server.route(routes);
  server.ext("onPreResponse", (request, h) => {
    const response = request.response;

    if (response.isBoom && response.output.statusCode === 413) {
      const newResponse = h.response({
        status: "fail",
        message: "Payload content length greater than maximum allowed: 1000000",
      });
      newResponse.code(413);
      return newResponse;
    }
    if (response instanceof InputError) {
      const newResponse = h.response({
        status: "fail",
        message: `${response.message}`,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }
    if (response.isBoom) {
      const newResponse = h.response({
        status: "fail",
        message: response.message,
      });
      newResponse.code(response.output.statusCode);
      return newResponse;
    }
    return h.continue;
  });
  await server.start();
  console.log("Server running on :", server.info.uri);
})();
