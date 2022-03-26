export class ApplicationException extends Error {
    constructor(message: string = 'Application Error'){
        super(message)
    }
}