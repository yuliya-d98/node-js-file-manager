import OperationFailedError from "../../errors/operation-failed-error.js";
import { access, appendFile } from 'node:fs/promises';
import InvalidInputError from "../../errors/invalid-input-error.js";
import { cwd } from 'node:process';
import { join } from 'node:path';
const createEmptyFileInCurrentDirectory = async (filename) => {
    const curDirectory = cwd();
    const filePath = join(curDirectory, filename);

    try {
        await access(filePath);
        // file already exists
        throw new InvalidInputError();
    } catch (error) {
        // no access to file
        if (error.code === 'ENOENT') {
            try {
                await appendFile(filePath, '');
            } catch (e) {
                throw new OperationFailedError();
            }
        } else {
            throw error;
        }
    }
}

export default createEmptyFileInCurrentDirectory;