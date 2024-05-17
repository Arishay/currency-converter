#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold.italic("\n \t Welcome to 'Arisha Ghaffar' --__-- Currency Converter\n"));
//defining the currencies and exchange rate of different countries
let exchangeRate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PAK": 280,
};
//Taking input from user
let userAnswer = await inquirer.prompt([
    {
        name: "From_Currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PAK"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PAK"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert: "
    }
]);
//writing the formula for converting currency
let from_amount = exchangeRate[userAnswer.From_Currency];
let to_amount = exchangeRate[userAnswer.to_currency];
let amount = userAnswer.amount;
//currency converter formula
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
