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

// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>