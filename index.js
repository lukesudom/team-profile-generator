//Imports 

import genHTML from './src/genHTML';

import Manager from './lib/Manager';

import Engineer from './lib/Engineer';

import Intern from './lib/Intern';

import fs, { writeFile } from 'fs';

import inquirer from 'inquirer';
import { report } from 'process';
import { triggerAsyncId } from 'async_hooks';

const teamArray = [];

// start of prompts

const addManager = () => {
    return inquirer.prompt ([

        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?',

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the name of the team manager!");
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'ID',
            message: 'What is the managers ID?',

            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please enter a valid manager ID!");
                    return false;
                } else {
                    return true;
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the manager?',

            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Please enter a valid email address!");
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the managers office number',

            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Please enter a valid office number!");
                    return false;
                } else {
                    return true;
                }
            }

        },
    ])

    .then (managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
    })
};

//Employee and intern prompts

const addEmployee = () => {
    console.log ('Adding Employees to the system')
};


return inquirer.prompt ([
    {
        name: 'role',
        type: 'list',
        message: "Choose your employee role",
        choices: ['Engineer','Intern']
    },
    {
        name: 'name',
        type: 'input',
        message: 'What is the employees name?',
         validate: nameInput => {
            if (nameInput) {
                return true;
            } else
            console.log ("please enter an employee name");
            return false;
        }
    },
    {
        name: 'email',
        type: 'input',
        message: "Please enter an employee email",
        validate: email => {
            valid =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log ("Enter a valid email address!")
                return false;
            }
        }
    },

    {
        name: 'school',
        type: 'input',
        message: "Enter the employees GitHub username",
        when: (input) => input.role === 'Engineer',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter a valid GitHub username");
                return false;
            }
        }
    },

    {
        name: 'school',
        type: 'input',
        message: 'Enter the interns University',
        when: (input) => input.role === 'Intern',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter a valid University!");
                return false;
            }
        }
    },

    {
        name: 'confirmAddEmployee',
        type: 'confirm',
        message: 'Are you sure you would like to add this employee?',
        default: false,
    }
])

.then (employeeData => {


    let {name, id, email, role, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === 'Engineer') {
        employee = new Engineer (name,id,email,github);

        console.log (employee)
    } else if (role === 'Intern') {

        console.log (employee);
    }



    teamArray.push(employee);

    if (confirmAddEmployee) {

        return addEmployee (teamArray);
    } else {
        return teamArray;
    }
});

addManager()
.then (addEmployee)
.then (teamArray => {
    return genHTML (teamArray);
})

.then (pageHTML => {
    return writeFile (pageHTML);
})
.catch (err => {
    console.log(err)
});