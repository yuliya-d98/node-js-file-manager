import InvalidInputError from "../../errors/invalid-input-error.js";
import checkIfPathValid from "../../utils/check-if-path-valid.js";
import OperationFailedError from "../../errors/operation-failed-error.js";
import { unlink } from 'node:fs/promises';

const deleteFile = async (pathToFile) => {
    if (pathToFile) {
        await checkIfPathValid(pathToFile);

        try {
            await unlink(pathToFile);
        } catch (e) {
            throw new OperationFailedError();
        }
    } else {
        throw new InvalidInputError();
    }
}

export default deleteFile;