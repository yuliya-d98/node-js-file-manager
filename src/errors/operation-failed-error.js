class OperationFailedError extends Error {
    constructor() {
        super('Operation failed');
        this.name = 'OperationFailedError';
    }
}

export default OperationFailedError;