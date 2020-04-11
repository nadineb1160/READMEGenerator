const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const fillInInput = require("./inputFilledIn");


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
            // Short Description
            type: "input",
            name: "shortDescription",
            message: "Please write a short description of your project: "
        },
        {
            // Description
            type: "input",
            name: "description",
            message: "Please write a long description of your project: "
        },
        {
            // Technologies
            type: "input",
            name: "technologies",
            message: "Please write the technologies used: "
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
            name: "usage",
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
            // User GitHub
            type: "input",
            name: "github",
            message: "Please write your GitHub username: ",
        },
        
    ]).then(function (userChoices) {

        // let queryURL = "";

        // axios.get(queryURL).then(function(githubProfile) {  


        // })

        var strInput = fillInInput(userChoices);

        fs.writeFile("README.md", strInput, function (error, data) {
            console.log("written to README");
        })

        return;

    })

}

// With <project> you can <verb><noun>...
// <project> helps you <varb><noun>....
// Unlike <alternative>, <project> <verbs> <noun>....


// https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>

