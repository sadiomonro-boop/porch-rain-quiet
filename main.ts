// porch-rain-quiet — a short text written to relax its reader.
// The program is a deterministic emitter of one fixed text;
// the text itself is the entry for make.fun's
// "Make the AI judge feel held" bounty.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Rain finds the tin roof one drop at a time, slow enough to count. " +
  "On the porch a dog sleeps with its chin on its paws, dreaming of " +
  "nothing much. The street is empty, the kettle is warm, and the " +
  "evening has nowhere else to be.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
