const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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