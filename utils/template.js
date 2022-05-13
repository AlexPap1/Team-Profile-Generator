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
                <div class="col-12 jumbotron text-white mb-3">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="main-section col-12 d-flex justify-content-center">
                    ${createProfile(generate)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};

const createProfile = generate => {
//container cards for employee type
  const create = manager => {
    return `
    <div class="card>
      <div class="card-header">
        <h2 class="card-title"> ${manager.getName()}</h2>
        <h4 class="card-job"> Manager </h4>}
      </div>
      <div class="card=contents">
        <ul class="list-info">
          <li class"list">ID: ${manager.getId()}</li>
          <li class"list">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> </li>
          <li class"list">Office Number: ${manager.getNumber()}</li>
        </ul>
      </div>
    </div>`;
  }
};