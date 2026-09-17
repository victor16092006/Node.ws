const express = require("express");

const router = express.Router();

const controller = require("../controllers/produto.controller");

router.get("/", controller.listar);

router.get("/:id", controller.buscarPorId);

router.post("/", controller.criar);

router.put("/:id", controller.atualizar);

router.patch("/:id", controller.atualizarParcialmente);

router.delete("/:id", controller.remover);

module.exports = router;
