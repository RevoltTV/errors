import ExtendableError from 'es6-error';

export class BadRequestError extends ExtendableError {
    constructor(message = 'Bad request', fields = []) {
        super(message);

        this.status = 400;
        this.fields = fields;
        this.level = 'warn';
    }
}

export class ConflictError extends ExtendableError {
    constructor(message = 'Conflict', fields = []) {
        super(message);

        this.status = 409;
        this.fields = fields;
        this.level = 'warn';
    }
}

export class LoginError extends ExtendableError {
    constructor(message = 'Invalid login') {
        super(message);

        this.status = 401;
        this.level = 'warn';
    }
}

export class NotFoundError extends ExtendableError {
    constructor(message = 'Not found') {
        super(message);

        this.status = 404;
        this.level = 'warn';
    }
}

export class UnauthenticatedError extends ExtendableError {
    constructor(message = 'Not authenticated') {
        super(message);

        this.status = 401;
        this.level = 'warn';
    }
}

export class UnauthorizedError extends ExtendableError {
    constructor(message = 'Not authorized') {
        super(message);

        this.status = 403;
        this.level = 'warn';
    }
}
