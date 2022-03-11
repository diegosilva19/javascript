class Usuario {
    email;
    senha;
    admin;

    constructor(infoEmail, infoSenha) {
        this.email = infoEmail;
        this.senha = infoSenha;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends Usuario {

    constructor(infoEmail, infoSenha) {
        super(infoEmail, infoSenha)
        super.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true