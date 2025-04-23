
//function readAndParse() {
    let counter = 0; 
    const { open } = require('node:fs/promises');
    (async () => {
        const file = await open('Emails.txt');   
    
        for await (const line of file.readLines()) {
            let words = line.split(' '); 
        
            for(let i = 0; i < words.length; i++) {

                if ((words[i].substring(words[i].length -13) == '@softwire.com')) {
                    counter ++;
                }
            } 
        }  
        console.log('The number of emails with @softwire.com domain is '+ counter); 
    }
    )();
   
