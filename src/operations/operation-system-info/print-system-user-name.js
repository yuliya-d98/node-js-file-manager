import { userInfo } from "node:os";
import OperationFailedError from "../../errors/operation-failed-error.js";

const printSystemUserName = () => {
    try {
        const username = userInfo().username;
        console.log(username);
    } catch (e) {
        throw new OperationFailedError()
    }
}

export default printSystemUserName;