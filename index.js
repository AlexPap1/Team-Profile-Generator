// List of Dependencies. Include packages needed for this application:
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user input:
const questions = [

    {
        type:'input',
        name:'username',
        message:'What is your GitHub Username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?',
    },
];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        //console logs error or success
        err ? console.log(err) : console.log('Success!')
    )
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            writeToFile("./dist/index.html", generateMarkdown(answers))
        })
};

// Function call to initialize app
init();
