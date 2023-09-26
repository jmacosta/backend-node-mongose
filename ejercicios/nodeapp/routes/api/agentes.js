const express = require("express");
const router = express.Router();
const Agente = require("../../models/Agente");
//GET /api/agentes
router.get("/", async (req, res, next) => {
  try {
    const agentes = await Agente.find();
    res.json({
      results: agentes,
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/agentes/(_id)
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const agente = await Agente.findById(id);
    res.json({ result: agente });
  } catch (err) {
    next(err);
  }
});

// PUT /api/agentes/(_id)
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const agenteUpdate = await Agente.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.json({ result: agenteUpdate });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
