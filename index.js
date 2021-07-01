const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer');
// const Engineer = require('./lib/Engineer');
// const Manager = require('./lib/Manager')
// const Intern = require('./lib/Intern')



// create an empty array to push the information into
const employees = [];

// Functions to initialize the app

// Prompt for questions
function addMember() {
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter Team Members Name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter Employee ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Select the employee role',
        choices: ['Manager', 'Engineer', 'Intern']
    }])
    .then(function({name, id, email, role}) {
        let roleDetails = "";
        if(role === 'Engineer') {
            roleDetails = "GitHub username";
        } else if (role === 'Intern') {
            roleDetails = "school name";            
        } else {
            roleDetails = "office phone number";
        }
    inquirer.prompt([
        {
        type: 'input',
        name:'roleDetails',
        message: `Enter team member's ${roleDetails}`
        },
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Would you like to add more team members?'
            
        }
]);
    })
}

addMember();