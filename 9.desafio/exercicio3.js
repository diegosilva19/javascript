// convert all to arrow functions


//3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
    return item + 10;
});

//console.log(arr.map( item => item + 10));



// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
    return usuario.idade;
}
mostraIdade(usuario);

const showAge = ({idade}) => idade;

//console.log(showAge(usuario));



// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
    return { nome, idade };
}

const showUser = (
                    {nome = 'Diego', idade = 18}
                ) => (
                    {idade, nome}
                )


mostraUsuario(nome, idade);
mostraUsuario(nome);

/*
console.log( 
    showUser(nome, idade),
    showUser(nome)
);*/



// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}


const promiseNova = function() {
    return new Promise((resolve, reject) => resolve())
};

promiseNova()
        .then((response) => console.log('resolvido') )
        .catch((reject) =>  console.log('deu ruim'));