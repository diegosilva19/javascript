//REST -- operator -- pegar o resto das propriedades
const usuario = {
    nome: "Diego",
    idade: 32,
    endereco : {
        cidade: "Diadema",
        estado: "SP"
    }
}

const {nome, ...objetoInteiroExcetoNome} = usuario;

console.log(nome, objetoInteiroExcetoNome)


// ARRAYS
const itemsArray = [1,2,3,4,5,6,7];

const [firstItem, secondItem, ...otherItems] = itemsArray;

console.log(firstItem, secondItem, otherItems);



// FUNCTIONS
function soma(firstParam, secondParam, ...multiParans) {
    console.log( "isolado primeiro e segundo para metros -> ", firstParam, secondParam);
    return multiParans.reduce( (currentNumber, nextNumber) => currentNumber + nextNumber);
}

console.log( soma(1,2,3,4,5,6,7,8,9));