import { describe, expect, it } from "vitest";

import { greet } from "./index.js";

describe("greet", () => {
	it("should return the greeting message", () => {
		const message = "Hello, world!";
		const result = greet(message);
		expect(result).toBe(message);
	});

	it("should return an empty string if no greeting is provided", () => {
		const message = "";
		const result = greet(message);
		expect(result).toBe(message);
	});

	it("should return the same greeting message for different inputs", () => {
		const message1 = "Hi there!";
		const message2 = "Good morning!";
		expect(greet(message1)).toBe(message1);
		expect(greet(message2)).toBe(message2);
	});
});
