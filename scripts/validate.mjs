#!/usr/bin/env node
// Validates the skill against the LIVE connector: every backticked `tool_name`
// the skill mentions must exist in GET https://mcp.chorushq.net/mcp/tools.json,
// the skill stays under 500 lines, and the plugin files parse.
//   node scripts/validate.mjs [tools.json URL]
import fs from "node:fs";
const URL_ = process.argv[2] ?? "https://mcp.chorushq.net/mcp/tools.json";
const skill = fs.readFileSync(new URL("../skills/chorus/SKILL.md", import.meta.url), "utf8");
const lines = skill.split("\n").length;
if (lines > 500) { console.error(`SKILL.md is ${lines} lines (> 500)`); process.exit(1); }
for (const f of ["../.claude-plugin/plugin.json", "../marketplace.json", "../.mcp.json"]) JSON.parse(fs.readFileSync(new URL(f, import.meta.url), "utf8"));
const mentioned = [...new Set([...skill.matchAll(/`([a-z][a-z0-9_]+)`/g)].map((m) => m[1]).filter((n) => n.includes("_")))];
let live;
try { live = await (await fetch(URL_, { signal: AbortSignal.timeout(8000) })).json(); }
catch (e) { console.error(`could not fetch ${URL_}: ${e}`); process.exit(2); }
const names = new Set((live.tools ?? live).map((t) => t.name));
const missing = mentioned.filter((n) => !names.has(n));
if (missing.length) { console.error("tools named in the skill but not on the connector:\n  " + missing.join("\n  ")); process.exit(1); }
console.log(`ok — ${mentioned.length} tool names verified against ${names.size} live tools; skill ${lines} lines`);
