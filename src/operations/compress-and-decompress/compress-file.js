import OperationFailedError from "../../errors/operation-failed-error.js";
import checkIfPathValid from "../../utils/check-if-path-valid.js";
import { dirname } from 'node:path';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';
import { promisify } from 'node:util';

const compressFile = async (pathToSource, pathToGzip) => {
    await checkIfPathValid(pathToSource);
    await checkIfPathValid(dirname(pathToGzip))

    try {
        const pipe = promisify(pipeline);

        const gzip = createGzip();
        const source = createReadStream(pathToSource);
        const destination = createWriteStream(pathToGzip);
        await pipe(source, gzip, destination);
    } catch (e) {
        throw new OperationFailedError();
    }
}

export default compressFile;