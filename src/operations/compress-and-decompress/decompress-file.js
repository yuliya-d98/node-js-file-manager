import OperationFailedError from "../../errors/operation-failed-error.js";
import checkIfPathValid from "../../utils/check-if-path-valid.js";
import { dirname } from 'node:path';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { promisify } from 'node:util';

const decompressFile = async (pathToGzip, pathToSource) => {
    await checkIfPathValid(pathToGzip);
    await checkIfPathValid(dirname(pathToSource))

    try {
        const pipe = promisify(pipeline);

        const unzip = createUnzip();
        const source = createReadStream(pathToGzip);
        const destination = createWriteStream(pathToSource);
        await pipe(source, unzip, destination);
    } catch (e) {
        throw new OperationFailedError();
    }
}

export default decompressFile;