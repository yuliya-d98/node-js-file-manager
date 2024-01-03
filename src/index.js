import process from 'node:process';
import { homedir } from 'node:os';
import goToUpperDirectory from "./navigation/go-to-upper-directory.js";
import goToDedicatedDirectory from "./navigation/go-to-dedicated-directory.js";
import printCurrentDirectoryEntries from "./navigation/print-current-directory-entries.js";
import readFile from "./basic-operations-with-files/read-file.js";
import createEmptyFileInCurrentDirectory from "./basic-operations-with-files/create-empty-file-in-current-directory.js";
import renameFile from "./basic-operations-with-files/rename-file.js";
import copyFile from "./basic-operations-with-files/copy-file.js";
import moveFile from "./basic-operations-with-files/move-file.js";
import deleteFile from "./basic-operations-with-files/delete-file.js";
import operationSystem from "./operation-system-info/operation-system.js";
import printHashForFile from "./hash-calculation/print-hash-for-file.js";
import compressFile from "./compress-and-decompress/compress-file.js";
import decompressFile from "./compress-and-decompress/decompress-file.js";

// npm run start -- --username=yuliya
const cliArguments = process.argv.slice(2);
const username = cliArguments.find((arg) => arg.startsWith('--username')).slice(11);

const usersHomeDirectory = homedir();
goToDedicatedDirectory(usersHomeDirectory);

const printPathToCurrentDirectory = () => {
    const pathToCurrentDir = process.cwd();
    console.log(`You are currently in ${pathToCurrentDir}`);
}

console.log(`Welcome to the File Manager, ${username}!`);
printPathToCurrentDirectory();

process.stdin.setEncoding('utf8');
process.stdin.on('data', async (data) => {
    const [operationName,  ...params] = data.trim().split(' ');

    const operations = [
        // Navigation
        { name: 'up', method: goToUpperDirectory },
        { name: 'cd', method: goToDedicatedDirectory },
        { name: 'ls', method: printCurrentDirectoryEntries },

        //Basic operations with files
        { name: 'cat', method: readFile },
        { name: 'add', method: createEmptyFileInCurrentDirectory },
        { name: 'rn', method: renameFile },
        { name: 'cp', method: copyFile },
        { name: 'mv', method: moveFile },
        { name: 'rm', method: deleteFile },

        // Operating system info
        { name: 'os', method: operationSystem },

        // Hash calculation
        { name: 'hash', method: printHashForFile },

        // Compress and decompress operations
        { name: 'compress', method: compressFile },
        { name: 'decompress', method: decompressFile },

        { name: '.exit', method: process.exit },
    ]

    const currentOperation = operations.find((oper) => oper.name === operationName);

    if (currentOperation) {
        await currentOperation.method(...params);
        printPathToCurrentDirectory();
    } else {
        console.log('Invalid input');
    }
})

process.on('exit', (code) => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
});
