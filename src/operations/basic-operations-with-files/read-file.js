import { readFile as nodeReadFile } from 'node:fs/promises';
import OperationFailedError from "../../errors/operation-failed-error.js";
import InvalidInputError from "../../errors/invalid-input-error.js";
import checkIfPathValid from "../../utils/check-if-path-valid.js";

const readFile = async (pathToFile) => {
    if (pathToFile) {
        await checkIfPathValid(pathToFile);

        try {
            const contents = await nodeReadFile(pathToFile, { encoding: 'utf8' });
            console.log(contents);
        } catch (err) {
            throw new OperationFailedError();
        }

    } else {
        throw new InvalidInputError();
    }
}

export default readFile;