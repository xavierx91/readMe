const inquirer = require('inquirer');
const fs = require('fs');
const PATH = require('path')
const generateMarkdown = require("./generateMarkdown");

  const questions = ([
    {
        type: "input",
        message: "What is the project title?",
        name: "projectTitle",
        
    },
    {
        type: "input",
        message: "Write a brief description of your project: ",
        name: "description",
        
    },
    {
        type: "input",
        message: "Describe the installation process if necesary: ",
        name: "installation",
    },
    {
        type: "input",
        message: "What is this project used for?",
        name: "usage",
        
    },
    {
        type: "list",
         message: "Chose the license for this project: ",
        choices: ['agpl',
            'gpl',
            'lgpl',
            'mpl',
            'apache',
            'mit',
            'bsl',
            'unlicense',
            
        ],
        name: "licenses",
       
    },
    {
        type: "input",
        message: "what color would you like your badge to be?",
        name: "color",
        
    },
    {
        type: "input",
        message: "Who are the contributors of this projects?",
        name: "creators",
        
    },
    {
        type: "input",
        message: "Are there tests included?",
        name: "tests",
        
    },
    {
        type: "input",
        message: "What do I do if I have an issue? ",
        name: "help",
        
    },
    {
        type: "input",
        message: "Please enter your GitHub username: ",
        name: "github",
        
    },
    {
        type: "input",
        message: "Please enter your email: ",
        name: "email",
        
    }

    ,{
      type: 'input',
      message: 'What was your motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'why',
    },
    {
      type: 'input',
      message: 'What problem does it solve?',
      name: 'solve',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn'
    },
    {
        type: 'input',
        message: 'What makes your project stand out?',
        name: 'unique',
    },
    
  ])
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}
// function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((questions) => {
        writeToFile(PATH.resolve(__dirname,"./generated/README.md"), generateMarkdown(questions));
    })
}

init();