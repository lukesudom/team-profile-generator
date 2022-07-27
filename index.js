//Imports 

import genHTML from './src/genHTML';

import Manager from './lib/Manager';

import Engineer from './lib/Engineer';

import Intern from './lib/Intern';

import fs from 'fs';

import inquirer from 'inquirer';

const teamArray = [];

// start of prompts

const addManager = () => {
    return inquirer.prompt ([

        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?'

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
            message: 'What is the managers ID?'

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid manager ID!");
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of the manager?'

            validate: nameInput => {
                if (nameInput) {
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
            message: 'Please enter the managers office number'

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid office number!");
                    return false;
                }
            }

        },
    ])
}