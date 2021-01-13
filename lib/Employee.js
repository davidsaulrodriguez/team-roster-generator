class Employee {
  constructor(Name, Id, Email) {
    this.name = Name;
    this.id = Id;
    this.email = Email;
    this.role = "Employee";
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
}

module.exports = Employee;
