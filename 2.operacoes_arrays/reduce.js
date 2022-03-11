const items = [1,4,9,2,10, 11];

//somando posições do array
const novosItems = items.reduce(function(current, next) {
    let somatoria = current + next;
    console.log("Current -> " , current, " Next -> ", next);
    console.log("Current Sum novo -> " , somatoria);
    return somatoria;
});

console.log(novosItems);