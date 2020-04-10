var inquirer = require("inquirer");

retreiveUserData();

function retreiveUserData() {
    // At least one badge
    inquirer.prompt([
        {
            // Project title
            type: "input",
            name: "title",
            message: "Please input your project title: "
        },
        {
            // Description
            type: "input",
            name: "description",
            message: "Please write a description of your project: "
        },
        {
            // Table of Contents
            type: "input",
            name: "tableOfContents",
            message: "Please write a your table of contents: "
        },
        {
            // Installation
            type: "input",
            name: "installation",
            message: "Please describe the intallation: ",
        },
        {
            // Usage
            type: "input",
            name: "installation",
            message: "Please describe the usage: ",
        },
        {
            // License
            type: "input",
            name: "license",
            message: "Please describe the license: ",
        },
        {
            // Contributing
            type: "input",
            name: "contributing",
            message: "Please describe the contributing: ",
        },
        {
            // Tests
            type: "input",
            name: "tests",
            message: "Please write your tests: ",
        },
        {
            // Questions
            type: "input",
            name: "questions",
            message: "Please write your questions: ",
        },
        {
            // User GitHub profile picture
            type: "input",
            name: "github",
            message: "Please write your GitHub username: ",
        },
        {
            // User GitHub email
            type: "input",
            name: "githubEmail",
            message: "Please write your GitHub email: ",
        },

    ])
}

// # Title

// # line

// Description

// ## Table of Contents

// #

// table of contents

// ## Getting Started

// Prerequistes and Installing

// # 

// installing

// ## Running Tests 

// # 

// tests - how to run the tests for this system

// ## Deployment

// # 

// notes on deployment

// ## Technologies

// # 

// list of technologies

// ## Contributing

// #

// contributing

// ## Authors

// # 

// name

// links to github

// github email

// ## License 

// # 

// license

// ## Acknowledgements

// # 

// acknowledgements - code contributions


// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>