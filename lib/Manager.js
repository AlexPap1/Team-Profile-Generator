//Consturctor -- Manager
const Employee = require('./Employee');

class Manager extends Employee {
    consructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }

    getNumber() {
        return this.number;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;