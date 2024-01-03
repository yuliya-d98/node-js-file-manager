import process from 'node:process';
import { homedir } from 'node:os';
import goToUpperDirectory from "./operations/navigation/go-to-upper-directory.js";
import goToDedicatedDirectory from "./operations/navigation/go-to-dedicated-directory.js";
import printCurrentDirectoryEntries from "./operations/navigation/print-current-directory-entries.js";
import readFile from "./operations/basic-operations-with-files/read-file.js";
import createEmptyFileInCurrentDirectory from "./operations/basic-operations-with-files/create-empty-file-in-current-directory.js";
import renameFile from "./operations/basic-operations-with-files/rename-file.js";
import copyFile from "./operations/basic-operations-with-files/copy-file.js";
import moveFile from "./operations/basic-operations-with-files/move-file.js";
import deleteFile from "./operations/basic-operations-with-files/delete-file.js";
import operationSystem from "./operations/operation-system-info/operation-system.js";
import printHashForFile from "./operations/hash-calculation/print-hash-for-file.js";
import compressFile from "./operations/compress-and-decompress/compress-file.js";
import decompressFile from "./operations/compress-and-decompress/decompress-file.js";
import InvalidInputError from "./errors/invalid-input-error.js";
import printPathToCurrentDirectory from "./utils/print-path-to-current-directory.js";

// npm run start -- --username=yuliya
const cliArguments = process.argv.slice(2);
const username = cliArguments.find((arg) => arg.startsWith('--username')).slice(11);

const usersHomeDirectory = homedir();
await goToDedicatedDirectory(usersHomeDirectory);

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

    try {
        if (currentOperation) {
            await currentOperation.method(...params);
        } else {
            throw new InvalidInputError();
        }
    } catch (e) {
        console.log(e.message)
    } finally {
        printPathToCurrentDirectory();
    }
})

process.on('exit', (code) => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
});
