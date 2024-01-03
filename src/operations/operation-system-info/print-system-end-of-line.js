import OperationFailedError from "../../errors/operation-failed-error.js";
import { EOL } from "node:os";

const printSystemEndOfLine = () => {
    try {
        console.log(JSON.stringify(EOL));
    } catch (e) {
        throw new OperationFailedError();
    }
}

export default printSystemEndOfLine;