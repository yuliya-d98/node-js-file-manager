import OperationFailedError from "../../errors/operation-failed-error.js";
import { homedir } from 'node:os';

const printHomeDirectory = () => {
    try {
        const usersHomeDirectory = homedir();
        console.log(usersHomeDirectory);
    } catch (e) {
        throw new OperationFailedError()
    }
}

export default printHomeDirectory;