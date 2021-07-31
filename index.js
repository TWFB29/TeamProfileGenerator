const inquirer = require('inquirer');
const fs = require('fs');



// const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');
// const mainHTML = require('./templates/mainHTML');

// const managerCard = require('./templates/managerhtml');
// const engineerCard = require('./templates/engineerhtml');
// const internCard = require('./templates/internhtml');


const teamArray = [];


const promptUser = [
    
        {
            type: "checkbox",
            name: "role",
            message: "Choose addition:",
            choices: ["Employee", "Engineer", "Intern", "Manager", "Done"]
        }
    ]

const employeePrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter email address:"
        }
    ])
};

const managerPrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter email address:"
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Enter office number:"
        }

    ])
};

const engineerPrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter email address:"
        },
        {
            name: "github",
            type: "input",
            message: "Enter GitHub username:",
        }
    ])
};

const internPrompt = () => {
    inquirer.prompt([
        {
            name: "name",
            message: "Enter name:",
            type: "input"
        },
        {
            name: "id",
            message: "Enter id number:",
            type: "input"
        },
        {
            name: "email",
            type: "input",
            message: "Enter email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter school name:",
        }
    
    ])
};

function Intern() {
    console.log("yes")
} 

function init() {
    inquirer.prompt(promptUser).then((data) => {
        const dd = (data.role)
        dd()
    })
    }
 
 

// Function call to initialize app
init();
