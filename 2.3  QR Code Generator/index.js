import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer
    .prompt([
        {
            message: "What is your URL",
            name: "URL",
        }
    ])
    .then((answers) => {
        const url = answers.URL;

        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_code.png'));

        fs.writeFile("url.txt", url, (err) => {
            if(err) throw err;
            console.log("The file has been saved!");
        })
    })
    .catch((error) => {
        if (error.isTtyError) {

        } else {

        }
    });