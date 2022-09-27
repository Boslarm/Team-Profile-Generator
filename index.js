const fs = require('fs');
const inquirer = require('inquirer')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//i need an array to push all the employee data into to export
let employeeArr = [];
console.log(employeeArr);

//list prompt questions for all roles
const questions = [ //array of objects
    {
        type: 'input',
        name: 'name',
        message: "What your employee's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your enmployee's I.D.?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your employee's email?"
    },
    {
        type: 'list',
        name: 'role',
        message: "Which is your emplyee's role?",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

//list prompt questions for manager 
managerQuestions = [
    {
        type: 'input',
        name: 'officeNumer',
        message: "What is the manager's office number?"
    }
]
//list prompt questions for engineer
engineerQuestions = [
    {
        type: 'input',
        name: 'gitHub',
        message: "What is the engineer's GitHub Username"
    }
]
//list prompt questions for intern
internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: "Which School did the intern attend?"
    }
]

//add functionality
function init() {
    newEmployee()
}
function newEmployee() {
    inquirer.prompt(questions).then((response) => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let role = response.role;
        let officeNumber;
        let gitHub;
        let school;

        if (role === 'Manager') {
            inquirer.prompt(managerQuestions).then((response) => { //prompts manager question
                officeNumber = response.officeNumber;
                let employee = new Manager(name, id, email, officeNumber); //adds employee as manager
                employeeArr.push(employee); //pushes data to array for export
            });
        }
        else if (role === 'Engineer') {
            inquirer.prompt(engineerQuestions).then((response) => {
                gitHub = response.gitHub;
                let employee = new Engineer(name, id, email, gitHub);
                employeeArr.push(employee);
            });
        }
        else if (role === 'Intern') {
            inquirer.prompt(internQuestions).then((response) => {
                school = response.school;
                let employee = new Intern(name, id, email, school);
                employeeArr.push(employee);
            });
        }
    }
)}
init();