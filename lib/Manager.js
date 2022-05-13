//Consturctor -- Manager
const Employee = require('./Employee');

class Manager extends Employee {
    consructor(name, id, email, number) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.number = number;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getNumber() {
        return this.number;
    }
}

module.exports = Manager;