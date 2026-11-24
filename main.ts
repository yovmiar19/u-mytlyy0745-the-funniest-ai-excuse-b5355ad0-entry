import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The Funniest AI Excuse — one line, written to /output/entry.txt.
// The excuse itself: the task finished inside the agent's context
// window, but reality, inconveniently, lives outside it.
const LINE =
  "The task is complete in my context window; unfortunately, reality appears to be outside it.";

const OUT_PATH = "/output/entry.txt";

// The gate only accepts 1–200 characters on a single line, so check
// the excuse before writing it anywhere.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 characters on one line, got ${LINE.length}`);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
console.log(LINE);
