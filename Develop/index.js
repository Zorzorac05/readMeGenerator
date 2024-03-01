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
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your github profile',
        name: 'git',
    },
    {
        type: 'input',
        message: 'What is the descrition of the project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the Installation instructions of the project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information of the project?',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'What is the License of the project?',
        name: 'license',
        choices: ["Apache2.0", "MIT", "Boost1.0", "BSD3", "None"],
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
        message: 'What is your email if the user has questions',
        name: 'questions',
    },
];

//get a license badge for the read me
function licenseBadge(license) {
    if(license !== "none"){
        return `![github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
    }else {
        return "No license used";
    }
}

//marks down the infro given when making the readme file
function markdown(data) {
    return `# ${data.title} by ${data.name}
${licenseBadge(data.license)}
## Table of Contents
1. [Description](#Description)
2. [Usage](#Usage)
3. [Installation](#Installation)
4. [Test](#Test)
5. [Questions](#Questions)
6. [License](#License)
## Description
${data.description}
## Usage
${data.usage}
## Installation
${data.installation}
## Contributers
${data.contributing}
## Test
${data.tests}
## Questions?
My name is ${data.name}
My github is [${data.git}](https://github.com/${data.git})
Email me at ${data.questions}
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