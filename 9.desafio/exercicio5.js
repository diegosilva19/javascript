//5.1 Rest
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


const somador = (...items) => { 
    return items.reduce(
        (current, next) => {
            // nao foi feita em uma linha por causa do babel 
            let somatoria = current + next
            return somatoria;
        }
    )
}

console.log(somador(1, 2));




//5.1 Spread -- substituindo objeto dentro de objeto

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario2)
console.log(usuario3)