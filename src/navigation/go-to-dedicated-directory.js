import { chdir } from 'node:process';

const goToDedicatedDirectory = (path) => {
    if (path) {
        try {
            chdir(path);
        } catch (e) {
            console.log('Operation failed');
        }
    } else {
        console.log('Invalid input');
    }
}

export default goToDedicatedDirectory;