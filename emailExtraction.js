const fs = require('fs')
const fileContents = fs.readFileSync('Emails.txt').toString();

const softwireEmailRegex = /@softwire\.com\s/g;
const allEmailRegex =/\S+@\S+\.\S+/g;

const softwireMatches = fileContents.match(softwireEmailRegex)
const allEmailMatches = fileContents.match(allEmailRegex);


let groupedByDomain = {};

function readAndParseSoftWireEmails() {
    let counter = 0;
   
    for (let i=0; i<allEmailMatches.length; i++) {
        let firstPart = allEmailMatches[i];        
        let secondPart = firstPart.split('@')[1];       

        for (let j =i+1; j<allEmailMatches.length; j++) {
            if(allEmailMatches[j].includes(secondPart)) {
                counter ++;
                groupedByDomain[secondPart] = counter;
            }
            
        }
        counter=0;
    }
    console.log(groupedByDomain);
}

readAndParseSoftWireEmails();
