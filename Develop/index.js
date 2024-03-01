//list of requires
const inquirer = require('inquirer');
const fs = require('fs');

//array of questions
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the descrition of the project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is Installation of the project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage of the project?',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'What is the License of the project?',
        name: 'license',
        choices: ["Apache License 2.0", "MIT License", "Boost Software License 1.0", "Eclipse Public License 2.0", "None"],
    },
    {
        type: 'input',
        message: 'Who is contribting to the project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What is the test of the project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What are questions of the project?',
        name: 'questions',
    },
];

//marks down the infro given when making the readme file
function markdown(data) {
    return `# ${data.title} by ${data.contributing}
## Table of Contents
1. Description
2. Usage
3. Installation
4. Test
5. Questions
6. License
## Description
${data.description}
## Usage
${data.usage}
## Installation
${data.installation}
## Test
${data.test}
## Questions
${data.questions}
## License
${data.liscense}`
}

//calls the write function
function writeToFile(fileName, data) {
    //console.log(data);
    fs.writeFile(fileName, markdown(data), (err) => 
    err ? console.log(err) : console.log("Success!"))
}

//first function ran
function init() {
    inquirer.prompt(questions)
        .then((response) =>
            writeToFile("README.md", response)
        );
}
//calls first function
init();    