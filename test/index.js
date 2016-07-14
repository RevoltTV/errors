import { expect } from 'chai';

import * as Errors from '../src';

describe('errors', () => {
    describe('BadRequestError', () => {
        it('should exist', () => {
            expect(Errors.BadRequestError).to.exist;
        });

        it('should set status to 400', () => {
            let err = new Errors.BadRequestError();

            expect(err.status).to.equal(400);
        });

        it('should set message to Bad request', () => {
            let err = new Errors.BadRequestError();

            expect(err.message).to.equal('Bad request');
        });

        it('should store fields', () => {
            let err = new Errors.BadRequestError('', ['test']);

            expect(err.fields).to.exist.and.deep.equal(['test']);
        });
    });

    describe('ConflictError', () => {
        it('should exist', () => {
            expect(Errors.ConflictError).to.exist;
        });

        it('should set status to 409', () => {
            let err = new Errors.ConflictError();

            expect(err.status).to.equal(409);
        });

        it('should set message to Conflict', () => {
            let err = new Errors.ConflictError();

            expect(err.message).to.equal('Conflict');
        });

        it('should store fields', () => {
            let err = new Errors.ConflictError('', ['test']);

            expect(err.fields).to.exist.and.deep.equal(['test']);
        });
    });

    describe('LoginError', () => {
        it('should exist', () => {
            expect(Errors.LoginError).to.exist;
        });

        it('should set status to 401', () => {
            let err = new Errors.LoginError();

            expect(err.status).to.equal(401);
        });

        it('should set message to Invalid login', () => {
            let err = new Errors.LoginError();

            expect(err.message).to.equal('Invalid login');
        });
    });

    describe('NotFoundError', () => {
        it('should exist', () => {
            expect(Errors.NotFoundError).to.exist;
        });

        it('should set status to 404', () => {
            let err = new Errors.NotFoundError();

            expect(err.status).to.equal(404);
        });

        it('should set message to Not found', () => {
            let err = new Errors.NotFoundError();

            expect(err.message).to.equal('Not found');
        });
    });

    describe('UnauthenticatedError', () => {
        it('should exist', () => {
            expect(Errors.UnauthenticatedError).to.exist;
        });

        it('should set status to 401', () => {
            let err = new Errors.UnauthenticatedError();

            expect(err.status).to.equal(401);
        });

        it('should set message to Not authenticated', () => {
            let err = new Errors.UnauthenticatedError();

            expect(err.message).to.equal('Not authenticated');
        });
    });

    describe('UnauthorizedError', () => {
        it('should exist', () => {
            expect(Errors.UnauthorizedError).to.exist;
        });

        it('should set status to 403', () => {
            let err = new Errors.UnauthorizedError();

            expect(err.status).to.equal(403);
        });

        it('should set message to Not authorized', () => {
            let err = new Errors.UnauthorizedError();

            expect(err.message).to.equal('Not authorized');
        });
    });
});
