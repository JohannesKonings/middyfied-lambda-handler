import middy from "@middy/core";

import { inputOutputLoggerMiddleware } from "./middyMiddlewares/middyInputOutputLogger.js";

interface CreateMiddyfiedGeneralEventHandlerProps {
	lambdaHandler: Handler;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Handler = (event: any, context: any) => Promise<any>;

export const createMiddyfiedGeneralEventHandler = (
	props: CreateMiddyfiedGeneralEventHandlerProps,
) => {
	const { lambdaHandler } = props;

	const middyfiedGeneralEventHandler = middy(lambdaHandler).use(
		inputOutputLoggerMiddleware(),
	);
	return middyfiedGeneralEventHandler;
};
