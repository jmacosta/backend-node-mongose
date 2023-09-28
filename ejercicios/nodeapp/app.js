var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const basicAuthMiddleware = require("./lib/basicAuthMiddleware");
const swaggerMiddleware = require("./lib/swaggerMiddleware");
require("./lib/connectMongoose");

const Agente = require("./models/Agente");
// Agente.find()
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// carga la app
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/*
 * Rutas del API
 */
app.use("/api/agentes", basicAuthMiddleware, require("./routes/api/agentes"));

/*
 * Rutas del website
 */
app.use("/", basicAuthMiddleware, require("./routes/index"));
app.use("/users", basicAuthMiddleware, require("./routes/users"));

/*
Routes of documentation 
*/
app.use("/api-doc", swaggerMiddleware);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  if (err.array) {
    const errorInfo = err.errors[0];
    err.message = `Error en ${errorInfo.location}`;
    err.status = 422;
  }
  // si lo que ha fallado es una petición al API
  //responder con error en formato JSON
  res.status(err.status || 500);
  if (req.originalUrl.startsWith("/api")) {
    res.json({ error: err.message });
    return;
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.render("error");
});

module.exports = app;
