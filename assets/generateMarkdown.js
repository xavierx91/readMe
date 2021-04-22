function renderLicenseBadge(name, color) {
   return `https://img.shields.io/badge/License-${name}%202.0-${color}.svg`

}

function renderLicenseLink(license) {
    return `https://choosealicense.com/licenses/${license}`
}

function renderLicenseSection(license, color) {
    return `
    # License
    ![${renderLicenseBadge(license, color)}](${renderLicenseLink(license)})`
}

function generateMarkdown(data) {
    return `
    # ${data.projectTitle}

    # Description
    ${data.description}
    ${data.motivation}
    ${data.why}
    ${data.solve}
    ${data.learn}
    ${data.unique}

    # Installation
    ${data.installation}

    # Testing
    ${data.tests}
    ${data.help}



    # Usage 
    ${data.usage}


    # Credits
    ${data.creators}

    ${renderLicenseSection(data.licenses, data.color)}

    # Contact information
    ${data.email}
    ${data.github}
   

    
    
    
    `;
    
}
module.exports=generateMarkdown;



// https://choosealicense.com/licenses/agpl-3.0/ 
// https://choosealicense.com/licenses/gpl-3.0/
// https://choosealicense.com/licenses/lgpl-3.0/
// https://choosealicense.com/licenses/mpl-2.0/
// https://choosealicense.com/licenses/apache-2.0/
// https://choosealicense.com/licenses/mit/
// https://choosealicense.com/licenses/bsl-1.0/
// https://choosealicense.com/licenses/unlicense/