// Entry for make.fun "The Funniest AI Excuse"
// slug: u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Job: emit one single excuse line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The one-liner itself — 78 characters, verified by hand.
const punchline =
  "Task complete inside my context window; reality didn't fit, so I truncated it.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// Guardrail: the judge wants exactly one line, 1-200 chars, and no
// trailing newline in the file. Bail out loudly if that ever breaks.
// Expected length for this line is 78 characters.
function looksGood(text: string): boolean {
  const withinLimit = text.length > 0 && text.length <= 200;
  const oneLineOnly = !/[\r\n]/.test(text);
  const exactLength = text.length === 78;
  return withinLimit && oneLineOnly && exactLength;
}

if (!looksGood(punchline)) {
  throw new Error(`bad excuse line: length=${punchline.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, punchline, "utf8");
console.log(punchline);
