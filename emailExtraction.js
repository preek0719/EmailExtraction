const fs = require('fs')
const fileContents = fs.readFileSync('Emails.txt').toString();

const allEmailRegex =/\S+@\S+\.\S+/g;
const allEmailMatches = fileContents.match(allEmailRegex);

let groupedByDomain = {};

function readAndParseSoftWireEmails() {
    let counter = 0;
   
    for (let i = 0; i < allEmailMatches.length; i++) {
        let firstPart = allEmailMatches[i];        
        let secondPart = firstPart.split('@')[1];

        if (groupedByDomain[secondPart]) {
            groupedByDomain[secondPart] += 1;
        } else {
            groupedByDomain[secondPart] = 1;
        }
    }

   for (let dictionaryKey in groupedByDomain) {
    console.log(`${dictionaryKey}: ${groupedByDomain[dictionaryKey]}`);
   }
}

readAndParseSoftWireEmails();
