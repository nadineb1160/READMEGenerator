const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const fillInInput = require("./inputFilledIn");


retreiveUserData();

function retreiveUserData() {
    // At least one badge
    inquirer.prompt([
        {
            // Name
            type: "input",
            name: "name",
            message: "Please write your name: ",
        },
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
            // Technologies
            type: "input",
            name: "technologies",
            message: "Please write the technologies used: "
        },
        {
            // Installation
            type: "input",
            name: "installation",
            message: "Please describe the installation instructions: ",
        },
        {
            // Usage
            type: "input",
            name: "usage",
            message: "Please describe the usage command or instructions: ",
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
        }

    ]).then(function (userChoices) {

        let queryGithubURL = "https://api.github.com/users/" + userChoices.github;

        axios.get(queryGithubURL).then(
            function (githubProfile) {
                let data = githubProfile.data;

                // Add github profile picture
                userChoices.githubPic = data.avatar_url;
                userChoices.url = data.html_url;

                // Fill in input with user inputs
                var strInput = fillInInput(userChoices);

                // Write README file
                fs.writeFile("README.md", strInput, function (error, data) {
                    console.log("written to README");
                })

                return;


            })
            .catch(function (error) {
                handleError(error);
            });

        // let label = "";
        // let message = "";
        // let color = "";

        // let queryBadgeURL = "https://img.shields.io/badge/" + label + "-" + message + "-" + color;

        // axios.get(queryBadgeURL).then(
        //     function (response) {
        //         console.log(response);
        //         userChoices.badge = response.data;

        //     }).catch(function(error) {
        //         handleError(error);
        //     });


    })

}

function handleError(error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
    }
    console.log(error.config);
}

