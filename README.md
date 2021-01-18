# Team Roster Generator

A nodejs based command line interface for generating html files with the info of your team members / co-workers.

## Table of Contents

- [Description](#description)

- [Installation](#installtion)

- [Usage](#usage)

- [Contributing](#contributing)

- [Tests](#tests)

- [License](#license)

## Description

This simple NodeJS based command line interface generates an HTML file named `team.html` with the information that you give it.

## Installation

To install this application be sure to follow these steps:

1. `git clone git@github.com:davidsaulrodriguez/team-roster-generator`

2. `cd team-roster-generaotr/`

3. `npm install`

## Usage

To begin using this app, affter running `npm install` be sure to run:

```shell
npm run start
```

## Contributing

Contributions are more than welcome! Please be sure to checkout:

- [CONTRIBUTING][contrib]
- [CODE OF CONDUCT][cod]

## Testing

This project comes with unit tests for testing classes using [JEST](jest). These tests are located in the `test/` folder.

To test against all the testing files, you can run:

```shell
npm run test
```

If you would like to test against a single test file, you can run `singleTest` and select the file, like so:

```shell
npm run singleTest test/Employee.test.js
```

## License

This project and all of its source code is released and permissively licensed under the [BSD 2 Clause](license) license.

[contrib]: ./CONTRIBUTING.md
[cod]: ./CODE_OF_CONDUCT.md
[license]: ./LICENSE
[jest]: https://jestjs.io