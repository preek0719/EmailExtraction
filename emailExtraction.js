
const { open } = require('node:fs/promises');
const emailRegex = /(.+)@softwire\.com$/;
function readAndParseSoftWireEmails() {
    let counter = 0;
    (async () => {
        const file = await open('Emails.txt');
        for await (const line of file.readLines()) {
            let words = line.split(' ');
            for (let i = 0; i < words.length; i++) {
                if ((words[i].match(emailRegex))) {
                    counter++;
                }
            }
        }
        console.log('The number of emails with @softwire.com domain is ' + counter);
    }
    )
        ();
}

readAndParseSoftWireEmails();

