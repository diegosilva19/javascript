const items = [1,4,9,2,10, 11];

//retornando somente par.
const novosItems = items.filter(function(current) {
    return current % 2 == 0;
});

console.log(novosItems);