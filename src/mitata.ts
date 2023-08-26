import { bench, group, run } from "mitata";

group("", () => {
	bench("noop", () => {});
	bench("add", () => {
		1 + 2;
	});
});

await run();
