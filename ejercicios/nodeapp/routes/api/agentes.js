const express = require("express");
const router = express.Router();
const Agente = require("../../models/Agente");
//GET /api/agentes
router.get("/", async (req, res, next) => {
  try {
    const filterByName = req.query.name;
    const filterByAge = req.query.age;
    const skip = req.query.skip;
    const limit = req.query.limit;
    const sort = req.query.sort;
    // field selection
    const fields = req.query.fields;

    const filtro = {};

    if (filterByName) {
      filtro.name = filterByName;
    }
    if (filterByAge) {
      filtro.name = filterByAge;
    }
    const agentes = await Agente.lista(filtro, skip, limit, sort, fields);
    agentes.forEach((element) => {
      element.saluda();
    });

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

// POST /api/agentes/
//Crea un agente

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const agente = new Agente(data);
    const agenteSave = await agente.save();
    res.json({
      result: agenteSave,
    });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/agentes/(id)
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    await Agente.deleteOne({ _id: id });
    res.json();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
