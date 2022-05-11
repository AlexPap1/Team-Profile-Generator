// List of Dependencies. Include packages needed for this application:
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// Create a function to initialize app
function init() {
    // inquirer.prompt(questions)
    //     .then(function (answers) {
    //         writeToFile("./dist/index.html", generateMarkdown(answers))
    //     })
    function manager(){
        inquirer.prompt([
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
        {
            type:'input',
            name:'manager',
            message:'What is the name of the team manager?',
        },
        {
            type:'input',
            name:'managerId',
            message:'What is the ID of the team manager?',
        },
        {
            type:'input',
            name:'managerEmail',
            message:'What is the email address of the team manager?',
        },
        {
            type:'input',
            name:'officeNumber',
            message:'What is the office number?',
        },
        ]);
    }
    manager();
};

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        //console logs error or success
        err ? console.log(err) : console.log('Success!')
    )
};

// Function call to initialize app
init();
