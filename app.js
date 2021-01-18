const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { Questions, Overwrite } = require('./lib/questions');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];

const addEmployee = () => {
  inquirer
  .prompt(Questions)
  .then((answers) => {
    // Check the employee type
    switch (answers.title) {
      // Constuct the class for that type (Manager, Eng, Intern)
      // Add constructed employee class to team array
      case 'Manager':
        employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
        break;
    
      case 'Engineer':
        employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        break;
    
      case 'Intern':
        employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        break;
    }

    // Check to see the value of the 'add another employee question'
    // If 'yes', then run the questions again.

    if (answers.askAgain === true) {
      addEmployee();
    } else {
      renderOutput();
    }
  });
}

// Created an Overwrite function.
// Did this as a self Bonus!
const overwrite = () => {
  const roster = render(employees);
  inquirer
  .prompt(Overwrite)
  .then((answers) => {
    if (answers.overwrite === true) {
      fs.writeFile(outputPath, roster, (err) =>
      err ? console.log(err) : console.log('You did it!'));
    } else {
      console.log("No changes made.");
    }
  });
}

const renderOutput = () => {
  const roster = render(employees);
  if (fs.existsSync(outputPath)) {
    overwrite();
  } else {
    fs.mkdir('output', (err) => {
      if (err) throw err;
      fs.writeFile(outputPath, roster, (error) =>
      err ? console.log(error) : console.log('You did it!'));
    })
  }
}

function init() {
  addEmployee();
}

init();
