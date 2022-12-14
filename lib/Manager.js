import Employee from "./Employee.js";

class Manager extends Employee {
    constructor (id, name, email, officeNumber) {
        super (id, name, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

export default Manager;