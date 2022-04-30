const inquirer = require('inquirer');
const fs = require('fs');

// Imports
const Employee = require('./employees/employee');
const teamManager = require('./employees/TeamManager');
const Engineer = require('./employees/engineer');
const Intern = require('./employees/intern');

// Template Literals
const teamManagerCard = require('./templates/teamManagerCard.js');
const EngineerCard = require('./templates/EngineerCard');
const internCard = require('./templates/internCard');

// Team Array 
const team = [];

function buildTeam(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the Team Manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "What is their Employee ID?",
                name: "employeeID"
            },
            {
                type: "input",
                message: "What is their Email Address?",
                name: "employeeEmail"
            },
            {
                type: "input",
                message: "What is their Office Number?",
                name: "employeeOfficeNumber"
            },
            {
                type: "list",
                message: "Would you like to add a Team Member, or have you completed your Team?",
                name: "contBuildTeam",
                choices: ["Add Engineer", "Add Intern","Complete Team"]
            },
        ])

        .then(function(answers) {
            const intern = new Intern(answers.internName, answers.employeeID, answers.employeeEmail, answers.schoolName);
            team.push(intern);

            if (answers.contBuildTeam == "Add Engineer") {
                buildEngineer();
            } else if(answers.contBuildTeam == "Add Intern") {
                buildIntern();
            } else if(answers.contBuildTeam == "Complete Team") {
                renderHTML();
            }
        })

        function renderHTML() {
            const teamContent = team.map(items => items(manger));
            console.log(teamContent);
            fs.writeFile('teamProfileGenerator', teamContent, (err) => err ? console.log(err) : console.log('Successfully created teamProfileGenerator.html!'));
        }
    }