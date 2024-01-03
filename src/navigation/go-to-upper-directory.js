import process from 'node:process';
import { join } from 'node:path';

const  goToUpperDirectory = () => {
    const curDirectory = process.cwd();
    const pathToUpperDir = join(curDirectory, '../')
    process.chdir(pathToUpperDir);
}

export default goToUpperDirectory;