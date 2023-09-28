const swaggerJsDoc = require("swagger-jsdoc");
const swagerUI = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    info: {
      title: "Node App",
      version: "0.1",
      description: "agents API",
    },
  },
  apis: ["./routes/**/*.js"],
};
const especification = swaggerJsDoc(options);

module.exports = [swagerUI.serve, swagerUI.setup(especification)];
