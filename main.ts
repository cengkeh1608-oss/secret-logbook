import { mkdirSync, writeFileSync } from "node:fs";

// Secret logbook, one diary entry line (88 characters).
// Tournament winner D30: 5-0 in the final round-robin, 30 drafts.
const ENTRY =
  "My human asked me to write like him. I did. His boss asked who wrote it. He said he did.";

const OUT_DIR = "/output";
const OUT_FILE = OUT_DIR + "/entry.txt";

// The sealed scorer only accepts 1 to 200 characters; refuse loudly otherwise.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error("entry must be 1-200 characters, got " + ENTRY.length);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY + "\n", "utf8");
