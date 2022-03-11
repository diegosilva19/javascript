const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idadesMapOperation = usuarios.map( (items) => items.idade);

console.log("idadesMapOperation", idadesMapOperation);

const filterOpetarion = usuarios.filter( (item) => {
    return item.empresa === 'Rocketseat' && item.idade > 18
});

console.log("filterOpetarion", filterOpetarion);

//buscar usuario com a empresa Google ( esperado undefined por que não foi encontrado)
const findOperation = usuarios.find( (item) => {
    return item.empresa === 'Google'
});

console.log("findOperation", findOperation);

//multiplicar idades por 2 e devolver apenas o resultado de até 50 anos;
const doubleAgeFilter = usuarios.map( ({idade}, ...item) => {
   item.idade = idade * 2
   return item;    
}).filter( (person) => person.idade <= 50);

console.log("doubleAgeFilter", doubleAgeFilter);