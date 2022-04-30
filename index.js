const inquirer = require('inquirer');
const fs = require('fs');

// Imports
const Employee = require('./employees/employee');
const teamManager = require('./employees/TeamManager');
const Engineer = require('./employees/engineer');
const Intern = require('./employees/intern');

// Template Literals
const teamManagerCard = require('./templates/teamManagerCard');
const EngineerCard = require('./templates/EngineerCard');
const internCard = require('./templates/internCard');

// Team Array 
const team = [];


inquirer
    .prompt([
        {
            
        },
    ])
    .then((response) => {
        var d = JSON.stringify(response)
        var htmlText =
            `<!DOCTYPE html>
            <html lang="en"> 
            <head> 
            <meta charset="UTF-8" /> 
            <title>Team Profile Generator</title> 
            <link rel="stylesheet" href="./assets/css/jass.css" /> 
            <link rel="stylesheet" href="./assets/css/style.css" /> 
            </head> 
            <body> 
            <header>Team Profile Generator</header>
            // TEAM LEADER
            <div class='card'>
            <div class='card-header'>${data.name}</div>
            <div class='card-body'>
            <p>Employee ID Number: ${data.id}</p>
            <p>Email: ${data.email}</p>
            <p>Office Number: <a href='mailto:${data.email}'>${data.email}</a></p>
            </div>
            </div>
            // ENGINEER
            <div class='card'>
            <div class='card-header'>${data.name}</div>
            <div class='card-body'>
            <p>Employee ID Number: ${data.id}</p>
            <p>Email: <a href='mailto:${data.email}'>${data.email}</a></p>
            <p>GitHub: <a href='https://github.com/${data.gitHub}'>${data.gitHub}</a></p>
            </div>
            </div>
            // INTERN
            <div class='card'>
            <div class='card-header'>${data.name}</div>
            <div class='card-body'>
            <p>Employee ID Number: ${data.id}</p>
            <p>Email: <a href='mailto:${data.email}'>${data.email}</a></p>
            <p>School: ${data.school}</p>
            </div>
            </div>
            </body>
            </html>`
        fs.writeFile('teamProfile.html', htmlText, (err) =>
        err ? console.error(err) : console.log('Success!')
        )
    }
    );