const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArray = [];
const managerArray = [];
const engineerArray = [];
const internArray = [];

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
        const employeeProfile = new Employee(
            data.name,
            data.id,
            data.email
        );

        employeeArray.push(employeeProfile);
        const n = 
        promptUser();
    });
    
}

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
        const managerProfile = new Manager(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );

        managerArray.push(managerProfile);
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
        const engineerProfile = new Engineer(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );

        engineerArray.push(engineerProfile);
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
        const internProfile = new Intern(
            data.name,
            data.id,
            data.email,
            data.officeNumber
        );

        internArray.push(internProfile);
        promptUser();
    })
};

const donePrompt = () => {
fs.writeFileSync("testing.html", )
};

function init() {
    promptUser()
};

init();

module.exports = (internArray);
module.exports = (engineerArray);
module.exports = (managerArray);
module.exports = (employeeArray);




const arrEmp = {}

const generateHTML = (employeeCard) => {

    return `

    <!DOCTYPE html>

    <html lang="en">

        <head>

            <title>My Team</title>

            <!-- Required meta tags -->

            <meta charset="utf-8" />

            <meta

                name="viewport"

                content="width=device-width, initial-scale=1, shrink-to-fit=no"

            />

    

            <link

                rel="stylesheet"

                href=https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css

                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"

                crossorigin="anonymous"

            />

       

        </head>

        <body>

            <div class="jumbotron jumbotron-fluid bg-dark">

                <div class="container">

                    <div class="row">

                        <div class="col">

                            <h1 class="display-4 text-left text-danger">My Team</h1>

                            <p class="lead"></p>

                        </div>

                    </div>

                </div>

            </div>

            <div class="container">

            <div class="row">

                <div class="col-12 d-flex justify-content-around mt-4">

                    ${employeeCard}

                </div>

            </div>

        </div>

    

            

            <script

                src=https://code.jquery.com/jquery-3.3.1.slim.min.js

                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"

                crossorigin="anonymous"

            ></script>

            <script

                src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js

                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"

                crossorigin="anonymous"

            ></script>

            <script

                src=https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js

                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"

                crossorigin="anonymous"

            ></script>

        </body>

    </html>

    `;

};

 

module.exports = generateHTML;