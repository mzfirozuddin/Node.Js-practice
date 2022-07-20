import chalk from 'chalk'; // ES6 module import method
import validator from 'validator';
// const validator = require('validator')  // normal javascript module import method


const res = validator.isEmail("firoz@gmail.com")
console.log(res? chalk.green.inverse(res):chalk.red.inverse(res))
