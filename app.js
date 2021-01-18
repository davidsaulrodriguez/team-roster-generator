const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { Questions } = require('./lib/questions');

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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
