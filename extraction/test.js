// Read from questions.json
// get the keys from "categories"

const fs = require('fs');
const path = require('path');

const questions = require('./questions.json');

const categories = Object.keys(questions.categories);

console.log(categories);





