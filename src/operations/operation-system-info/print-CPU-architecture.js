import OperationFailedError from "../../errors/operation-failed-error.js";
import { arch } from 'node:os';

const printCPUArchitecture = () => {
    try {
        console.log(arch());
    } catch (e) {
        throw new OperationFailedError()
    }
}

export default printCPUArchitecture;