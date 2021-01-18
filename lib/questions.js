const Questions = [
  {
    type: 'list',
    name: 'title',
    message: 'Which of the following describes your job title?',
    choices: ['Manager', 'Engineer', 'Intern']
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: (value) => {
      let pass = value.match(
        /^([a-zA-Z ]{2,30})$/
      );
      if (pass) {
        return true;
      }

      return 'Please enter your full name, or at least your initials.';
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "What is your employee ID number?",
    validate: (value) => {
      let pass = value.match(
        /^([0-9]{1,6})$/
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid employee ID number. (At least 1 digit; No more than 6 digits)';
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email address?",
    validate: (value) => {
      let pass = value.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid email address';
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is this manager's office number?",
    when: (answers) => {
      return answers.title === 'Manager';
    },
    validate: (value) => {
      let pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    when: (answers) => {
      return answers.title === 'Engineer';
    },
    validate: (value) => {
      let pass = value.match(
        /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i // regex that equates to a valid GitHub username
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid GitHub username.';
    }
  },
  {
    type: 'input',
    name: 'school',
    message: 'What is the name of your school?',
    when: (answers) => {
      return answers.title === 'Intern';
    },
    validate: (value) => {
      let pass = value.match(
        /^([a-zA-Z0-9 ]{1,30})$/
      );
      if (pass) {
        return true;
      }

      return 'Please input a school. No more than 30 characters (including spaces).';
    },
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Would you like to add another employee (just hit enter for YES)?',
    default: true,
  }
];

const Overwrite = [
  {
    type: 'confirm',
    name: 'overwrite',
    message: 'This file already exists. Would you like to overwrite it? (default is NO)',
    default: false
  }
]

module.exports = {Questions, Overwrite};
