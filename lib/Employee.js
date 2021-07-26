class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    gitId() {
        return this.id;
    }

    gitEmail() {
        return this.email;
    }

    gitRole() {
        return 'Employee';
    }
}

module.exports = Employee;