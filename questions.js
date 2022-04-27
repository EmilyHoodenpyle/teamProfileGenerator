const inquirer = require('inquirer');
const fs = require('fs');

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
            </body>
            </html>`
        fs.writeFile('userDisplay.html', htmlText, (err) =>
        err ? console.error(err) : console.log('Success!')
        )
    }
    );