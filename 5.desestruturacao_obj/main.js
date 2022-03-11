//ES6 +
const usuario = {
    nome: "Diego",
    idade: 32,
    endereco : {
        cidade: "Diadema",
        estado: "SP"
    }
}

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome, idade, cidade)


function mostraNome({nome, idade}) {
    console.log(nome, idade)
}

mostraNome(usuario)