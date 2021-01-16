let ManagerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name of your Manager?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is this Manager's ID/Employee number?",
    validate: (value) => {
      let pass = value.match(
        /^([0-9]{1,6})$/
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid ID/Employee number. (At least 1 digit; No more than 6 digits)';
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is this Manager's email address?",
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
];

let EngineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name of this Enginner?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is this Engineer's ID/Employee number?",
    validate: (value) => {
      let pass = value.match(
        /^([0-9]{1,6})$/
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid ID/Employee number. (At least 1 digit; No more than 6 digits)';
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is this Engineer's email address?",
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
    name: 'github',
    message: "What is this Engineer's GitHub username?",
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
    type: 'confirm',
    name: 'askAgain',
    message: 'Is there another Engineer on your team (just hit enter for YES)?',
    default: true,
  },
];

let InternQuestions = [
  {
    type: 'input',
    name: 'name',
    message: "What's the name of this Intern?",
  },
  {
    type: 'input',
    name: 'id',
    message: "What is this Intern's ID/Employee number?",
    validate: (value) => {
      let pass = value.match(
        /^([0-9]{1,6})$/
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid ID/Employee number. (At least 1 digit; No more than 6 digits)';
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "What is this Intern's email address?",
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
    name: 'school',
    message: "What school does this intern attend?",
    validate: (value) => {
      let pass = value.match(
        /^([a-zA-Z0-9 ]{1,30})$/
      );
      if (pass) {
        return true;
      }

      return 'Please input a school. No more than 30 characters (including spaces).';
    }
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Is there another intern on your team (just hit enter for YES)?',
    default: true,
  },
];

module.exports = {ManagerQuestions, EngineerQuestions, InternQuestions}