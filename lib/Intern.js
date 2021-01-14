const Employee = require('./Employee');

class Intern extends Employee {
  constructor(Name, Id, Email, School) {
    super(Name, Id, Email)
    this.name = Name;
    this.id = Id;
    this.email = Email;
    this.school = School;
    this.role = "Intern"
  }

  getRole() {
    return this.role;
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
