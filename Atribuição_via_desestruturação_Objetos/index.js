const pessoa = {
    nome: 'Francisco',
    sobrenome: 'Lima',
    endereco: {
        rua: 'Rua Alaodim',
        numero: 428
    }
};

//Atribuição Via Desestruturação (Objetos)

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);