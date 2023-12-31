import InvalidInputError from "../../errors/invalid-input-error.js";
import OperationFailedError from "../../errors/operation-failed-error.js";
import { join, basename, dirname } from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import checkIfPathValid from "../../utils/check-if-path-valid.js";
import { unlink } from 'node:fs/promises';

const moveFile = async (pathToFile, pathToNewDirectory) => {
    if (pathToFile && pathToNewDirectory) {
        await checkIfPathValid(pathToFile);
        await checkIfPathValid(pathToNewDirectory);

        try {
            const inputStream = createReadStream(pathToFile, 'utf-8')
            const pathToCopy = join(pathToNewDirectory, basename(pathToFile));
            const outputStream = createWriteStream(pathToCopy);

            inputStream
                .pipe(outputStream)
                .on('finish', async () => {
                    await unlink(pathToFile);
                });

        } catch (e) {
            throw new OperationFailedError();
        }
    } else {
        throw new InvalidInputError();
    }
}

export default moveFile;