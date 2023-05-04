#! /usr/bin/env node
import inquirer from "inquirer"

const select = async() =>{
const input = await inquirer.prompt([
    {
        type: "string",
        name: "option",
        message: "Enter 1 if you perform this again otherwise press 2:",
    }
]);
if(input.option == 1){
    await welcome();
}
else{
    console.log("GoodBye!");
}
}
const welcome = async()=>{
    const input = await inquirer.prompt([
        {
            type: "string",
            name: "sentence",
            message: "Enter a English passage:",
        }
    ]);
    const word_counter = input.sentence.trim().split(" ");
    console.log(word_counter);
    console.log(word_counter.length);
    await select()
}
await welcome()

