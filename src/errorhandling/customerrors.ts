export class NotAuthenticatedError extends Error {
  constructor() {
    super("User is not authenticated. Invalid token.");

    this.name = this.constructor.name;

    // This clips the constructor invocation from the stack trace.
    // It's not absolutely essential, but it does make the stack trace a little nicer.
    Error.captureStackTrace(this, this.constructor);
  }
}

export class UniqueConstraintViolationError extends Error {
  constructor(field) {
    super(`Unique constraint violated on User. Mutation did not complete. Field = ${field}`);

    this.name = this.constructor.name;

    // This clips the constructor invocation from the stack trace.
    // It's not absolutely essential, but it does make the stack trace a little nicer.
    Error.captureStackTrace(this, this.constructor);
  }
}

export class UserNotFoundError extends Error {
  constructor(userId) {
    super(`User with ID ${userId} was not found.`)

    this.name = this.constructor.name;

    // This clips the constructor invocation from the stack trace.
    // It's not absolutely essential, but it does make the stack trace a little nicer.
    Error.captureStackTrace(this, this.constructor)
  }
}

export class UserNotAuthorizedError extends Error {
  constructor(userId) {
    super(`User with ID ${userId} does not have permission to perform this action.`)

    this.name = this.constructor.name;

    // This clips the constructor invocation from the stack trace.
    // It's not absolutely essential, but it does make the stack trace a little nicer.
    Error.captureStackTrace(this, this.constructor)
  }
}
