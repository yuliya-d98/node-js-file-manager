import { chdir, argv } from 'node:process';
import { homedir } from 'node:os';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const cliArguments = argv.slice(2);
const username = cliArguments.find((arg) => arg.startsWith('--username')).slice(11);

// global.dir = homedir();
const usersHomeDirectory = homedir();
chdir(usersHomeDirectory);

const printPathToCurrentDirectory = () => {
    const filename = fileURLToPath(import.meta.url);
    const pathToCurrentDir = dirname(filename);
    console.log(`You are currently in ${pathToCurrentDir}`);
}

console.log(`Welcome to the File Manager, ${username}!`);
printPathToCurrentDirectory();
console.log(`Thank you for using File Manager, ${username}, goodbye!`);
