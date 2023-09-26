var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// GET /parametro_en_ruta//66
router.get("/parametro_en_ruta/:numero", (req, res, next) => {
  const numero = req.params.numero;
  res.send("he recibido el numnero: " + numero);
});

router.get("/parametro_en_ruta/:numero?", (req, res, next) => {
  const numero = req.params.numero;
  res.send("opcional he recibido el numero: " + numero);
});
// // get multiples parametros
// router.get("/parametro_en_ruta/:numero?", (req, res, next) => {
//   const numero = req.params.numero;
//   res.send("opcional he recibido el numero: " + numero);
// });

module.exports = router;
