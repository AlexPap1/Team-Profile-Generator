//Consturctor -- Employee
class Employee {
    constructor(name, id, email, other='Employee')  {
        this.name = name;
        this.id = id;
        this.email = email;
        this.other = other;
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

    getOther() {
        return this.other;
    }
}

module.exports = Employee