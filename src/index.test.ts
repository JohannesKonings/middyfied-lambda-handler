import { describe, expect, it, vi } from "vitest";

import { createMiddyfiedGeneralEventHandler } from "./createMiddyfiedGeneralEventHandler.js";

describe("createMiddyfiedGeneralEventHandler", () => {
	it("should return a middyfied handler", async () => {
		const mockHandler = vi.fn().mockResolvedValue("test response");
		const middyfiedHandler = createMiddyfiedGeneralEventHandler({
			lambdaHandler: mockHandler,
		});

		const event = { a: 1 };
		const context = { b: 2 };

		const response = await middyfiedHandler(event, context);

		expect(response).toBe("test response");
		expect(mockHandler).toHaveBeenCalledWith(event, context, expect.anything());
	});
});
