import OperationFailedError from "../../errors/operation-failed-error.js";
import InvalidInputError from "../../errors/invalid-input-error.js";
import checkIfPathValid from "../../utils/check-if-path-valid.js";
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';

const readFile = async (pathToFile) => {
    if (pathToFile) {
        await checkIfPathValid(pathToFile);

        try {
            createReadStream(pathToFile).pipe(stdout);
        } catch (err) {
            throw new OperationFailedError();
        }

    } else {
        throw new InvalidInputError();
    }
}

export default readFile;