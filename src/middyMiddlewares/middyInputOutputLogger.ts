import type { MiddlewareObj, Request } from "@middy/core";

const isTest = process.env.NODE_ENV === "test";

export const inputOutputLoggerMiddleware = (): MiddlewareObj => {
	const inputOutputLoggerMiddlewareBefore = (request: Request): void => {
		if (isTest) {
			return;
		}
		console.info("BEGIN: processing Input", { input: request.event });
		console.trace("context", { context: request });
	};

	const inputOutputLoggerMiddlewareAfter = (): void => {
		if (isTest) {
			return;
		}
		console.info("END: processing Input");
	};
	const inputOutputLoggerMiddlewareError = (request: Request): void => {
		if (isTest) {
			return;
		}
		console.error("ERROR: processing Input", { cause: request.error });
		throw request.error;
	};

	return {
		before: inputOutputLoggerMiddlewareBefore,
		after: inputOutputLoggerMiddlewareAfter,
		onError: inputOutputLoggerMiddlewareError,
	};
};
