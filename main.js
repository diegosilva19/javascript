/*
7º exercício
Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
*/


const nome = 'Diego';
const idade = 23;
const usuario = {
    nome: nome,
    idade: idade,
    cidade: 'Rio do Sul',
};

console.log(" original ", usuario);

//RESPOSTA:

const usuario2 = {
    nome,
    idade,
    cidade: 'Rio do Sul',
};

console.log(" Object6 Syntax ", usuario2);