const items = [1,4,9,2,10, 11];

const novosItems = items.map(item => item * 2 );

const novosItemsExemplos = items.map(item => {
    return item * 2 
});

const novosItemsIndexExemplos = items.map( (item, indice) => {
    return item * indice;
});


console.log(novosItems, novosItemsExemplos, novosItemsIndexExemplos);