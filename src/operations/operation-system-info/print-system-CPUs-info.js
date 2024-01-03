import OperationFailedError from "../../errors/operation-failed-error.js";
import { cpus } from "node:os";

const printSystemCPUsInfo = () => {
    try {
        const cpusArray = cpus();
        const tableData = cpusArray.map((cpu) => ({
            Model: cpu.model.trim(),
            'Clock rate (in GHz)': (cpu.speed / 1024).toFixed(3)
        }))
        console.log(`Host machine has ${cpusArray.length} CPUs:`);
        console.table(tableData)
    } catch (e) {
        throw new OperationFailedError();
    }
}

export default printSystemCPUsInfo;