function generateHTML(data) {
    return `
    <!DOCTYPE html>
            <html lang="en"> 
            <head> 
            <meta charset="UTF-8" /> 
            <title>Team Profile Generator</title> 
            <link rel="stylesheet" href="./assets/css/jass.css" /> 
            <link rel="stylesheet" href="./assets/css/style.css" /> 
            </head> 
            <body> 
            <header>Team Profile Generator</header> 
            <div class="cards"> // PUT CARDS HERE </div>
            </body>
            </html>
    `
  };
  
  module.exports = generateHTML;