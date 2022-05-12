// List of Dependencies. Include packages needed for this application:
const generate = require("./utils/template.js");
const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const employee = require('./lib/Employee.js');
const manager = require('./lib/Manager');
const intern = require ('./lib/Intern');
const engineer = require('./lib/Engineer');

const Arr = [];

// Create a function to initialize app
function init() {
    function addManager(){
        inquirer.prompt([
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
        ]).then(answers => {
            console.log(answers)
            // const manager = new Manager(answers.manager, answers.ManagerId, answers.managerEmail, answers.officeNumber);
            // Arr.push(manager);
            team();
        });
    };
    function team() {
        inquirer.prompt([
            {
                type: "list",
                name: "employeeType",
                message: "What is the job title of the next employee?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Finished"
                ]
            }
        //manager questions cycle... problem in below?
        ]).then(userChoice => {
            switch (userChoice.employeeType){
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Finished":
                    writeToFile();
            }
        });
    };
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the name of the engineer?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the ID of the engineer?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the email of the engineer?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the GitHub username for the engineer?",
            }
        ]).then(answers => {
            //const Engineer = new engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            Arr.push(Engineer);
            team();
        })
    };
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the name of the intern?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is the ID of the intern?",
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the email of the intern?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the name of the school the intern is attending?",
            }
        ]).then(answers => {
            //const Intern = new intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            Arr.push(Intern);
            team();
        })
    };

    //Create a function to write html
    function writeToFile() {
        fs.writeFile(path.join('index.html', render(Arr), "utf-8"), err =>
            //console logs error or success
            err ? console.log(err) : console.log('Success!')
        )
    }

    addManager();  
};

// Function call to initialize app
init();
