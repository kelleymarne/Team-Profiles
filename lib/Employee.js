class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getName() {
        console.log('Name: ' + this.name)
            return this.name;
    }

    getId() {
        console.log('Employee ID: ' + this.id);
        return this.id;
    }

    getEmail() {
        console.log('Email: ' + this.email)
        return this.email
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;