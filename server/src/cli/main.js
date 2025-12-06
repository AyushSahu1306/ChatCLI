#!/usr/bin/env node

import dotenv from "dotenv";
import chalk from "chalk";
import figlet from "figlet";

import {Command} from "commander";

dotenv.config();

async function main() {

    //Display Banner
    console.log(
        chalk.cyan(
            figlet.textSync("Chat CLI",{
                font:"Standard",
                horizontalLayout:"default"
            })
        )
    )

    console.log(chalk.red("A CLI based AI Tool \n"));

    const program = new Command("chatcli");

    program.version("0.0.1")
    .description("Chat CLI - A CLI Based AI Tool")

    program.action(()=>{
        program.help();
    })

    program.parse();
}

main().catch((err)=>{
    console.log(chalk.red("Error running orbital CLI:"),err);
    process.exit(1);
});