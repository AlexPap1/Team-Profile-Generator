//function to generate markdown for README
function generateMarkdown(data) {
//start of html setup
  return `# Title: ${data.repo}

${licenseBadge(data.license)}

## 🖥️ Github URL 🖥️
<br />

## ${data.username}
## https://github.com/${data.username}/
<br />

## 🖊️ Description 🖊️
<br />

${data.description}
<br />

## 📜 Table of Contents 📜
<br />

* [Installations](#⬇️-installations-⬇️)
* [Usage](#⚙️-usage-⚙️)
${licenseLink(data.license)}
* [Contributors](#🤝-contributors-🤝)
* [Tests](#👾-tests-👾)
* [Questions?](#🤔-questions-🤔)
<br />

## ⬇️ Installations ⬇️
<br />

${data.instructions}
<br />

## ⚙️ Usage ⚙️
<br />

${data.usage}
<br />

## 🤝 Contributors 🤝
<br />

${data.contributing}
<br />

## 👾 Tests 👾
<br />

${data.tests}
<br />

${licenseSection(data.license)}
<br />

## 🤔 Questions 🤔
<br />

* Have any additional questions? Check out my github profile ${data.username} at https://github.com/${data.username}/

* And feel free to ask additional questions by reaching [my email](mailto:${data.email}).
<br />

Made with ❤️ and Thank you for viewing 🤝

`;
}

module.exports = generateMarkdown;
