const nome = "DIEGO";
const idade = 32;


//default
const usuario = {
    nome: nome,
    idade: idade,
    empresa: "Minha propria"
}

console.log(usuario);

//ES6+ -- Object Short Syntax
//quando a proriedade do objeto tem o mesmo nome da variavel pode ser usada no modelo do exemplo abaixo :

const usuarioShort = {
    nome,
    idade,
    empresa: "Minha propria"
}

console.log(usuarioShort);