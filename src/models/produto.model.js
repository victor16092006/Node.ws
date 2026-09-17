class Produto {
    constructor({ id, nome, preco }) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    estaEmPromocao() {
        return this.preco < 100;
    }
}

class Produto {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

module.exports = Produto;