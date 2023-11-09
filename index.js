// Use the inquirer npm package to get user input.
// Use the qr-image npm package to turn the user entered URL into a QR code image.
// Create a txt file to save the user input using the native fs node module.

import inquirer from "inquirer";



inquirer
    .prompt([
        /* Pass your questions in here */
        {
            message: "Type in your URL: ",
            name: "URL",
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers);
        const url = answers.URL;
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });