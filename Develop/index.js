// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  { type: 'input', name: 'title', message: 'What is the title of your project?' },
  { type: 'input', name: 'description', message: 'Provide a description of your project:' },
  { type: 'input', name: 'installation', message: 'Provide installation instructions:' },
  { type: 'input', name: 'usage', message: 'Provide usage information:' },
  { type: 'input', name: 'contributing', message: 'Provide contribution guidelines:' },
  { type: 'input', name: 'tests', message: 'Provide test instructions:' },
  { type: 'list', name: 'license', message: 'Choose a license for your application:', choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'] },
  { type: 'input', name: 'github', message: 'What is your GitHub username?' },
  { type: 'input', name: 'email', message: 'What is your email address?' }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('README.md created successfully!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error('Error initializing app:', error);
    });
}

// Function call to initialize app
init();
