import middy from "@middy/core";
import { inputOutputLoggerMiddleware } from "./middyMiddlewares/middyInputOutputLogger.js";

type Handler = (event: any, context: any) => Promise<any>;

type CreateMiddyfiedGeneralEventHandlerProps = {
	lambdaHandler: Handler;
};

export const createMiddyfiedGeneralEventHandler = (
	props: CreateMiddyfiedGeneralEventHandlerProps,
) => {
	const { lambdaHandler } = props;

	const middyfiedGeneralEventHandler = middy(lambdaHandler).use(
		inputOutputLoggerMiddleware(),
	);
	return middyfiedGeneralEventHandler;
};
