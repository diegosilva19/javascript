class List {

    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }

    static olaMundo() {
        console.log("ola");
    }

}

class TodoList extends List{

    constructor() {
        super();
    }
}

const MinhaLista = new TodoList();

document.querySelector("#addTodo").onclick = function() {

    MinhaLista.add('Novo todo');
}