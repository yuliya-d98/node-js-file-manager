class InvalidInputError extends Error {
    constructor() {
        super('Invalid input');
        this.name = 'InvalidInputError';
    }
}

export default InvalidInputError;