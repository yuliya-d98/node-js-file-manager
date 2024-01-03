import { chdir } from 'node:process';
import checkIfPathValid from "../../utils/check-if-path-valid.js";
import InvalidInputError from "../../errors/invalid-input-error.js";
import OperationFailedError from "../../errors/operation-failed-error.js";

const goToDedicatedDirectory = async (path) => {
    if (path) {
        await checkIfPathValid(path);

        try {
            chdir(path);
        } catch (e) {
            throw new OperationFailedError();
        }
    } else {
        throw new InvalidInputError();
    }
}

export default goToDedicatedDirectory;