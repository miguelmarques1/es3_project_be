export class EntityValidationException extends Error {
    constructor(
        readonly message: string
    ) {
        super(message);
    }
}