import { readdir } from 'node:fs/promises';
import { cwd } from 'node:process';
import OperationFailedError from "../../errors/operation-failed-error.js";

const printCurrentDirectoryEntries = async () => {
    try {
        const curDirectory = cwd();
        const files = await readdir(curDirectory, { withFileTypes: true });
        const tableData = files
            .sort((fileA, fileB) => fileA.isFile() - fileB.isFile())
            .map((file) => ({
                Name: file.name,
                Type: file.isFile() ? 'file' : 'directory'
            }));
        console.table(tableData);
    } catch (err) {
        throw new OperationFailedError();
    }
}

export default printCurrentDirectoryEntries;