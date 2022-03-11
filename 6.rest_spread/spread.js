//SPREAD -- operator 
const firstItems = [1,2,3,4];
const secondItems = [5,6,7];


const totalItems = [...firstItems, ...secondItems];

console.log(totalItems);



//SPEAD -- clone object
const usuario = {
    nome: "Diego", 
    idade: 32
}

const usuarioClonado = {...usuario, nome: 'Diferente pessoa'};

console.log(usuarioClonado);