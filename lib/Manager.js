const Employee = require('./Employee');

class Manager extends Employee {
  constructor(Name, Id, Email, officeNumber) {
    super(Name, Id, Email)
    this.name = Name;
    this.id = Id;
    this.email = Email;
    this.officeNumber = officeNumber;
    this.role = "Manager"
  }

  getRole() {
    return this.role;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
