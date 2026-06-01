import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const lock = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"));

assert.equal(
  pkg.repository.url,
  "git+https://github.com/brainAI-bot/agentfolio-mcp-server.git",
  "package repository must point at the canonical brainAI-bot repo"
);

assert.equal(lock.version, pkg.version, "package-lock root version must match package.json");
assert.equal(
  lock.packages[""].version,
  pkg.version,
  "package-lock package entry version must match package.json"
);

