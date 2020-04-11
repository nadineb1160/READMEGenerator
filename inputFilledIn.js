
function fillInInput(userChoices) {

    let longString = 
    `# ${userChoices.title}\n` +
    `${userChoices.description}\n` +

    `>Technologies:\n` +
    `${userChoices.technologies}\n` +

    `## Table of Contents\n` +
    // `#\n` +
 
    `- [Installation](#installation)\n` +
    `- [Usage](#usage)\n` +
    `- [Deployment](#deployment)\n` +
    `- [Tests](#tests)\n` +
    `- [Liscene](#liscence)\n` +
    `- [Authors](#authors)\n` +
    `- [Questions](#questions)\n` +

    `## Getting Started\n` +
    // `#\n` +
    // `### Prerequistes:\n` +
    // `${userChoices.prereqs}\n` +

    `### Installation:\n` +
    `${userChoices.installation}\n`+

    `### Usage:\n` +
    `${userChoices.usage}\n` +

    // `## Deployment\n` +
    // `#\n` +
    // `${userChoices.deploy}\n` +

    `## License\n` +
    `#\n` +
    `${userChoices.license}\n` +
    
    `## Contributing\n` +
   `#\n` +
    `${userChoices.contributing}\n` +

    `## Tests\n` +
    `#\n` + 
    `${userChoices.tests}\n` +

    `## Questions\n` +
    `#\n` +
    `${userChoices.questions}\n` +
    
    `## Authors\n` +
    // `#\n` + 
    `${userChoices.name}\n` +
    `\n` +

    `- Github: ${userChoices.github}\n` +
    `- [GitHub URL](${userChoices.url})\n` +
    `\n` +
    `![Photo](${userChoices.githubPic})\n` 
    
    // ## Acknowledgements - code contributions
    // # 
    // ${userChoices.acknowledgements}

    // `![Photo](${userChoices.badge})\n`
    
    return longString;
}


module.exports = fillInInput;


// USE - demonstration
// 1. name prerqs
// 2. list installation steps
// 3. Show that it works once.


// Documentation
// did you use other resources?
// link
// description