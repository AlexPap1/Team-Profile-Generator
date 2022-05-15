//Consturctor -- Employee
class Employee {
    constructor(name, id, email, other, job)  {
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

    getJob() {
        return this.job;
    }
}

module.exports = Employee