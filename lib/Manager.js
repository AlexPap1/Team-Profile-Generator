//Consturctor -- Manager
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }

    getNumber() {
        return this.number;
    }

    getJob() {
        return 'Manager';
    }
}

module.exports = Manager;