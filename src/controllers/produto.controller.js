const service = require("../services/produto.service");

// GET /produtos
exports.listar = (req, res) => {
    const produtos = service.listar(req.query.nome);

    res.status(200).json(produtos);
};

// GET /produtos/:id
exports.buscarPorId = (req, res) => {
    const produto = service.buscarPorId(req.params.id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json(produto);
};

// POST /produtos
exports.criar = (req, res) => {
    try {
        const produto = service.criar(req.body);

        res.status(201).json(produto);
    } catch (erro) {
        res.status(400).json({
            mensagem: erro.message
        });
    }
};

// PUT /produtos/:id
exports.atualizar = (req, res) => {
    try {
        const produto = service.atualizar(
            req.params.id,
            req.body
        );

        if (!produto) {
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            });
        }

        res.status(200).json(produto);
    } catch (erro) {
        res.status(400).json({
            mensagem: erro.message
        });
    }
};

// PATCH /produtos/:id
exports.atualizarParcialmente = (req, res) => {
    const produto = service.atualizarParcialmente(
        req.params.id,
        req.body
    );

    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(200).json(produto);
};

// DELETE /produtos/:id
exports.remover = (req, res) => {
    const removido = service.remover(req.params.id);

    if (!removido) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.status(204).send();
};
