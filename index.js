const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer');
// const Engineer = require('./lib/Engineer');
// const Manager = require('./lib/Manager')
// const Intern = require('./lib/Intern')
const EngingeerTemp = require('./srcTemps/EngineerTemp');
const InternTemp = require('./srcTemps/InternTemp');
const ManagerTemp = require('./srcTemps/ManagerTemp');
const generatePage = require('./srcTemps/generatePage');



// create an empty array to push the information into
const employees = [];


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
            message: 'Would you like to add more team members?',       
        }])
        .then(function(data) {

            let allData = {...data, name, id, email, role};
            htmlRender(allData);

            if(data.addMore) {

                addMember()
            } else {
               let finalHTML = generatePage(employees);
            
               fs.writeFileSync(path.resolve('./dist/finalHtml.html'), finalHTML)
                // function to end the prompts
            }
        })
    })
}


function htmlRender(data){
    switch (data.role) {
        case 'Engineer':  employees.push(EngingeerTemp(data)); break;
        case  'Manager': employees.push(ManagerTemp(data)); break;
        case  'Intern': employees.push(InternTemp(data)); break;
    
        default:
            break;
    }
    console.log(employees)
}


addMember();