import { access } from 'node:fs/promises';
import OperationFailedError from "../errors/operation-failed-error.js";

const checkIfPathValid = async (path) => {
    try {
        await access(path);
    } catch {
        throw new OperationFailedError();
    }
}

export default checkIfPathValid;