//need to do template literal
    //get card style from bootstrap
//need functions for each card category
    //manager
function managerCard(data) { //from array created on index.js - need to export that
    return `
    <div class="flex-item">
    <div class="card-header">
            <h3>${data.name}</h3>
            <h4>Manager</h4>
    </div>
    <div class="card-body">
        <p class="id"> ${data.id}</p>
        <p class="email">Email:<a href="mailto:${data.email}">${data.email}</a></p>
        <p class="office">Office Number: ${data.getOfficeNumber()}</p> 
    </div>
</div>
    `
}    //engineer
function engineerCard(data) {
    return `
    <div class="flex-item">
        <div class="card-header">
            <h3>${data.name}</h3>
            <h4>Engineer</h4>
        </div>
        <div class="card-body">
            <p class="id"> ${data.id}</p>
            <p class="email">Email:<a href="mailto:${data.email}">${data.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${data.getGithub()}">${data.getGithub()}</a></p>
        </div>
    </div>
    `
}
function internCard(data) {
    return `
    <div class="flex-item">
        <div class="card-header">
            <h3>${data.name}</h3>
            <h4>Intern</h4>
        </div>
        <div class="card-body">
            <p class="id"> ${data.id}</p>
            <p class="email">Email:<a href="mailto:${data.email}">${data.email}</a></p>
            <p class="school">School: ${data.getSchool()}</p>
        </div>
    </div>
    `
}
    //intern

    //also add styling here
        //bootstrap, jquery, etc.
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Team Profile</title>
</head>
<body>
    
</body>
</html>
`

module.exports = createHTML //add to index.js