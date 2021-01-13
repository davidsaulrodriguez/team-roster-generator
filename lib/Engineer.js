const Employee = require('./Employee');

class Engineer extends Employee {
  constructor (Name, Id, Email, Github) {
    super(Name, Id, Email)
    this.name = Name;
    this.id = Id;
    this.email = Email;
    this.github = Github;
    this.role = "Engineer";
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;