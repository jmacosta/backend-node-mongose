var express = require("express");
var router = express.Router();
const { query, validationResult } = require("express-validator");
/* GET users listing. */
router.get(
  "/",
  [
    query("age").isNumeric().withMessage("debe de ser un valor numerico"),
    query("name")
      .custom((valor) => {
        return valor === "rojo";
      })
      .withMessage("debe de ser rojo"),
  ],
  function (req, res, next) {
    validationResult(req).throw();
    const usuarios = [
      { name: "smith", age: 32 },
      { name: "brown", age: 52 },
    ];

    const filtroName = req.query.name;
    if (filtroName) {
      res.json(usuarios.filter((usuario) => usuario.name === filtroName));
    } else {
      res.json(usuarios);
    }
  }
);

// POST / users/5 (body)

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.send("recibido");
});

module.exports = router;
