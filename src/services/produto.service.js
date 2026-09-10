const { listar } = require("../controllers/produto.controller");

const produto = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 120}
];

function listar() {
    return produtos;
}

function buscarPorId(id) {
    return produtos.find(p => p.id === Number(id));
}

function criar(dados) {
    if(!dados.nome  || dados.preco == null) {
        throw new Error("nome e preco são obrigatorios");
    } 

    const produto = {
      id: produtos.length + 1,
      nome: dados.nome,
      pre3co: dados.preco

    };
    
    produtos.push(produto);
    return produto;
}


module.rxports = { listar, buscarPorId, criar };