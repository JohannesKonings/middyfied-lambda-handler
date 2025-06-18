import type { MiddlewareObj, Request } from "@middy/core";

const isTest = process.env.NODE_ENV === "test";

export const inputOutputLoggerMiddleware = (): MiddlewareObj => {
	const inputOutputLoggerMiddlewareBefore = (request: Request): void => {
		if (isTest) {
			return;
		}
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		console.info("BEGIN: processing Input", { input: request.event });
		console.trace("context", { context: request });
	};

	const inputOutputLoggerMiddlewareAfter = (request: Request): void => {
		if (isTest) {
			return;
		}
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		console.info("END: processing Result", { result: request.response });
	};
	const inputOutputLoggerMiddlewareError = (request: Request): void => {
		if (isTest) {
			return;
		}
		console.error("ERROR: processing Input", { cause: request.error });
		if (request.error instanceof Error) {
			throw request.error;
		} else {
			throw new Error(
				typeof request.error === "string"
					? request.error
					: JSON.stringify(request.error),
			);
		}
	};

	return {
		after: inputOutputLoggerMiddlewareAfter,
		before: inputOutputLoggerMiddlewareBefore,
		onError: inputOutputLoggerMiddlewareError,
	};
};
