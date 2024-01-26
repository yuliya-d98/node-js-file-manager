import { cwd, chdir } from 'node:process';
import { join } from 'node:path';

const  goToUpperDirectory = () => {
    const curDirectory = cwd();
    const pathToUpperDir = join(curDirectory, '../')
    chdir(pathToUpperDir);
}

export default goToUpperDirectory;