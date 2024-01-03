import { cwd } from 'node:process';

const printPathToCurrentDirectory = () => {
    const pathToCurrentDir = cwd();
    console.log(`You are currently in ${pathToCurrentDir}`);
}

export default printPathToCurrentDirectory;