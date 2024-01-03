import InvalidInputError from "../errors/invalid-input-error.js";
import { access } from 'node:fs/promises';

const checkIfPathValid = async (path) => {
    try {
        await access(path);
    } catch {
        throw new InvalidInputError();
    }
}

export default checkIfPathValid;