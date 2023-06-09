// TODO: Include packages needed for this application
// I'm not importing the util script, it's all going into this file
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Ya I'm just gonna put the array into the prompt
inquirer.prompt([
    {
        type: 'input',
        name: 'author',
        message: "Who is your author of this code?"
    },
    {
        type: 'input',
        name: 'contact',
        message: "Contact info?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the name of this code base?"
    },
    {
        type: 'input',
        name: 'application',
        message: 'What does this code?'
    },
    {
        type: 'input',
        name: 'howTo',
        message: 'How should a user go about utilizing it (install/add on)?'
    },
    {
        type: 'input',
        name: 'commands',
        message: 'What are the commands needed to run this?'
    },
    {
        type: 'input',
        name: 'dependancies',
        message: 'Are there any third party dependancies need for this to run? If so list them.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Any one you need to shout out for helping with this? If so list them.'
    },
    {
        type: 'list',
        name: 'License',
        choices: [
          'Apache License 2.0',
          'GNU General Public License v3.0',
          'MIT License',
          'BSD 2-Clause"Simplified" License',
          'BSD 3-Clause "New" or "Revised" License',
          'Boost Software License 1.0',
          'Creative Commons Zero v1.0',
          'Universal Eclipse Public License 2.0',
          'GNU Affero General Public License v3.0',
          'GNU General Public License v2.0',
          'GNU Lesser General Public License v2.1',
          'Mozilla Public License 2.0',
          'The Unlicense',
        ],
      },
])
.then(({
    title,
    application,
    howTo,
    commands,
    dependancies,
    contributions,
    license,
    author,
    contact
})=>{ const template = 

`# ${title}
## Usage 
${application}
## Instructions for usage 
${howTo}
## Useful commands
${commands}
## Dependancies 
${dependancies}
## Contributions 
${contributions}
## License 
${license}
# Contact
* Author: 
${author}
* contact: 
${contact}`;


function createNewFile(fileName, data){
    fs.writeFile(`./${fileName}.md`, data, (err)=> {
        if (err) {
            console.log(err)
        }
        console.log('Check your folders for the readme');
    })
}

createNewFile(title,template);
});


