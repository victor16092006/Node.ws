const Produto = require("../models/produto.model");

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 120 }
];
function listar(nome) {
    if (nome) {
        return produtos.filter(produto =>
            produto.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    return produtos;
}


function buscarPorId(id) {
    return produtos.find(produto => produto.id === Number(id));
}

// POST /produtos
function criar(dados) {
    if (!dados.nome || dados.preco == null) {
        throw new Error("nome e preco são obrigatórios");
    }

    const produto = new Produto({
        id: produtos.length + 1,
        nome: dados.nome,
        preco: dados.preco
    });

    produtos.push(produto);

    return produto;
}

// PUT /produtos/:id
function atualizar(id, dados) {
    const produto = buscarPorId(id);

    if (!produto) {
        return null;
    }

    if (!dados.nome || dados.preco == null) {
        throw new Error("nome e preco são obrigatórios");
    }

    produto.nome = dados.nome;
    produto.preco = dados.preco;

    return produto;
}


function atualizarParcialmente(id, dados) {
    const produto = buscarPorId(id);

    if (!produto) {
        return null;
    }

    if (dados.nome !== undefined) {
        produto.nome = dados.nome;
    }

    if (dados.preco !== undefined) {
        produto.preco = dados.preco;
    }

    return produto;
}


function remover(id) {
    const indice = produtos.findIndex(
        produto => produto.id === Number(id)
    );

    if (indice === -1) {
        return false;
    }

    produtos.splice(indice, 1);

    return true;
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    atualizarParcialmente,
    remover
};