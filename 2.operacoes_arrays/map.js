const items = [1,4,9,2,10, 11];

const novosItems = items.map(function(item, index) {
    return item + index;
});

console.log(novosItems);