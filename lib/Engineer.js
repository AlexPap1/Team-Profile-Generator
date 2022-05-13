//Consturctor -- Engineer
const Employee = require('./Employee');

class Engineer extends Employee {
    consructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getName(){
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;