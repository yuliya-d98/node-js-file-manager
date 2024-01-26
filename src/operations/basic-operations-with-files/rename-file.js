import InvalidInputError from "../../errors/invalid-input-error.js";
import checkIfPathValid from "../../utils/check-if-path-valid.js";
import { join, dirname } from 'node:path';
import { rename } from 'node:fs/promises';
import OperationFailedError from "../../errors/operation-failed-error.js";

const renameFile = async (pathToFile, newFileName) => {
    if (pathToFile && newFileName) {
        await checkIfPathValid(pathToFile);
        
        try {
            const pathWithNewName = join(dirname(pathToFile), newFileName);
            await rename(pathToFile, pathWithNewName);
        } catch (e) {
            throw new OperationFailedError();
        }
    } else {
        throw new InvalidInputError();
    }
}

export default renameFile;