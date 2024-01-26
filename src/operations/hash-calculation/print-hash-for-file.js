import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import checkIfPathValid from "../../utils/check-if-path-valid.js";

const printHashForFile = async (pathToFile) => {
    await checkIfPathValid(pathToFile);

    try {
        const file = await readFile(pathToFile, { encoding: 'utf8' });

        const hash = createHash('sha256');
        hash.on('readable', () => {
            const data = hash.read();
            if (data) {
                console.log(data.toString('hex'));
            }
        });

        hash.write(file);
        hash.end();
    } catch (e) {

    }
}

export default printHashForFile;