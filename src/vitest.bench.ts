import { bench, describe } from "vitest";

describe("", () => {
	bench("noop", () => {});

	bench("add", () => {
		1 + 2;
	});
});
