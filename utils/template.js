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
    </head>
    <body>
        <div class="container-fluid">
            <div>
                <div class="jumbotron col-12 text-light bg-primary">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div class="col-12 d-flex justify-content-center">
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
        <h2> ${manager.getName()} </h2>
        <h4> ${manager.getJob()} 👓</h4>
      </div>
      <div>
        <ul>
          <li>ID: ${manager.getId()}</li>
          <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a> </li>
          <li>Office Number: ${manager.getNumber()}</li>
        </ul>
      </div>
    </div>`;
  };

    const generateEngineer = engineer => {
      return `
      <div class="card">
        <div class="card-header">
          <h2> ${engineer.getName()}</h2>
          <h4> ${engineer.getJob()} 🔧 </h4>
        </div>
        <div>
          <ul>
            <li>ID: ${engineer.getId()}</li>
            <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </li>
            <li>GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
          </ul>
        </div>
      </div>`;
    };

    const generateIntern = intern => {
      return `
      <div class="card">
        <div class="card-header">
          <h2> ${intern.getName()}</h2>
          <h4> ${intern.getJob()} 🎒 </h4>
        </div>
        <div>
          <ul>
            <li>ID: ${intern.getId()}</li>
            <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
            <li>School: ${intern.getSchool()}</li>
          </ul>
        </div>
      </div>`;
    }

const array = [];

//check out map w. console logs

array.push(generate
  .filter(employee => employee.getJob() === 'Manager')
  .map(manager => generateManager(manager)));


array.push(generate
  .filter(employee => employee.getJob() === 'Engineer')
  .map(engineer => generateEngineer(engineer))
  .join("")
  );


array.push(generate
  .filter(employee => employee.getJob() === 'Intern')
  .map(intern => generateIntern(intern))
  .join("")
  );

return array.join("")

};