const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const empCard = require('./dist/employeeGenerate');
const manCard = require('./dist/managerGenerate');
const engCard = require('./dist/engineerGenerate');
const intCard = require('./dist/internGenerate');

const mainHTML = require('./dist/mainHTML')

const path = require('path');
const employeeCard = require('./dist/employeeGenerate');
const htmlGenerate = path.resolve(__dirname, 'htmlGenerate', 'TeamProfile.html');

const mainArray = [];

const promptUser = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Choose action:",
            choices: ["newEmployee", "newEngineer", "newIntern", "newManager", "Done"],
        },
        ])
        .then(data => {
            switch (data.role) {
                case 'newEmployee': {
                    employeePrompt();
                    break;
                }
                case 'newEngineer': {
                    engineerPrompt();
                    break;
                }
                case 'newIntern': {
                    internPrompt();
                    break;
                }
                case 'newManager': {
                    managerPrompt();
                    break;
                }
                case 'Done': {
                    donePrompt();
                    break;
                }
            }
        });
    }

const employeePrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter employee's name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter employee's id number:",
            type: "input"
        },
        {
            name: "email",
            message: "Enter employee's email:",
            type: "input"
        }
    ]).then(data => {
        const employeeInfo = new Employee(
            data.name,
            data.id,
            data.email
        );

        
        const n = empCard(employeeInfo)
        mainArray.push(n);
        promptUser();
    })
    
};

const managerPrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter manager's name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter manager's id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter manager's email:"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Enter manager's office number:"
        }

    ]).then(data => {
        const managerInfo = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );

        const m = manCard(managerInfo)
        mainArray.push(m);
        promptUser();

    });
};

const engineerPrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter engineer's name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter engineer's id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter engineer's email:"
        },
        {
            name: "github",
            type: "input",
            message: "Enter engineer's GitHub username:",
        }
    ]).then(data => {
        const engineerInfo = new Engineer(
            data.name,
            data.id,
            data.email,
            data.github
        );

        const en = engCard(engineerInfo)
        mainArray.push(en);
        promptUser();
    });
};

const internPrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter intern's name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter intern's id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter intern's email:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school:",
        }

    ]).then(data => {
        const internInfo = new Intern(
            data.name,
            data.id,
            data.email,
            data.school
        );

        const i = intCard(internInfo)
        mainArray.push(i);
        promptUser();
    })
};

function donePrompt() {
    const allCards = mainArray.join('')
fs.writeFileSync(htmlGenerate, mainHTML(allCards), 'utf-8');
};

function init() {
    managerPrompt()
};

init();


