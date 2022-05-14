//basic html page template
//change css in module.exports = generate \/
module.exports = generate => {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="jumbotron col-12 text-light bg-primary">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center">
                    ${generateProfile(generate)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

const generateProfile = generate => {
//container cards for employee type
  const generateManager = manager => {
    return `
    <div class="card">
      <div class="card-header">
        <h2 class="card-title"> ${manager.getName()}</h2>
        <h4 class="card-job"> Manager </h4>
      </div>
      <div class="card=contents">
        <ul class="list-info">
          <li class="list">ID: ${manager.getId()}</li>
          <li class="list">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> </li>
          <li class="list">Office Number: ${manager.getOther()}</li>
        </ul>
      </div>
    </div>`;
  };

    const generateEngineer = engineer => {
      return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title"> ${engineer.getName()}</h2>
          <h4 class="card-job"> Engineer </h4>
        </div>
        <div class="card-contents">
          <ul class="list-info">
            <li class="list">ID: ${engineer.getId()}</li>
            <li class="list">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </li>
            <li class="list">GitHub: ${engineer.getOther()}</li>
          </ul>
        </div>
      </div>`;
    };

    const generateIntern = intern => {
      return `
      <div class="card">
        <div class="card-header">
          <h2 class="card-title"> ${intern.getName()}</h2>
          <h4 class="card-job"> Intern </h4>
        </div>
        <div class="card=contents">
          <ul class="list-info">
            <li class="list">ID: ${intern.getId()}</li>
            <li class="list">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
            <li class="list">School: ${intern.getOther()}</li>
          </ul>
        </div>
      </div>`;
    }

const array = [];

array.push(generate.map(generateManager));

 array.push(generate.map(generateEngineer));

 array.push(generate.map(generateIntern));

return array.join("")

};