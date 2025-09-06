#!/usr/bin/env node
/**
 * update-citation.ts
 *
 * Updates CITATION.cff with:
 *   - version: from package.json OR from last commit date (depending on CLI option)
 *   - date-released: from last commit date
 *
 * Usage:
 *   node scripts/update-citation.ts [--repo <path>] [--citation <path>] [--version-source <pkg|date>] [--no-commit] [--dry-run] [--verbose] [--help]
 */

import { readFile, writeFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve, join } from "node:path";
import { execSync } from "node:child_process";
import process from "node:process";

interface CliOptions {
  readonly repo: string;
  readonly citation: string;
  readonly commit: boolean;
  readonly dryRun: boolean;
  readonly verbose: boolean;
  readonly help: boolean;
  readonly versionSource: "pkg" | "date";
}

const DEFAULTS: Omit<CliOptions, "help"> = {
  repo: process.cwd(),
  citation: "CITATION.cff",
  commit: true,
  dryRun: false,
  verbose: false,
  versionSource: "pkg",
};

function printHelp(): void {
  console.log(`
update-citation.ts

Options:
  --repo <path>            Path to the repository root. Default: cwd
  --citation <path>        Path to CITATION.cff. Default: CITATION.cff
  --version-source <mode>  Version source: "pkg" (package.json) or "date" (last commit date). Default: pkg
  --no-commit              Do not git add/commit the updated file
  --dry-run                Show changes without writing files
  --verbose                Print additional output
  --help                   Show this help
`);
}

function parseArgs(argv: readonly string[]): CliOptions {
  let opts: CliOptions = { ...DEFAULTS, help: false };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help") {
      opts = { ...opts, help: true };
    } else if (arg === "--repo") {
      opts = { ...opts, repo: argv[++i] ?? opts.repo };
    } else if (arg === "--citation") {
      opts = { ...opts, citation: argv[++i] ?? opts.citation };
    } else if (arg === "--no-commit") {
      opts = { ...opts, commit: false };
    } else if (arg === "--dry-run") {
      opts = { ...opts, dryRun: true };
    } else if (arg === "--verbose") {
      opts = { ...opts, verbose: true };
    } else if (arg === "--version-source") {
      const v = argv[++i];
      if (v !== "pkg" && v !== "date") throw new Error("Invalid --version-source (must be 'pkg' or 'date')");
      opts = { ...opts, versionSource: v };
    } else {
      throw new Error(`Unknown option: ${arg}`);
    }
  }

  return opts;
}

async function readJsonFile<T>(path: string): Promise<T> {
  return JSON.parse(await readFile(path, "utf8")) as T;
}

function ensureV(input: string): string {
  return input.startsWith("v") ? input : `v${input}`;
}

function getLastCommitDate(repoDir: string): string {
  const out = execSync("git log -1 --format=%cs", { cwd: repoDir, encoding: "utf8" }).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(out)) throw new Error("Unexpected git date format: " + out);
  return out;
}

function formatDateAsVersion(date: string): string {
  const [y, m, d] = date.split("-");
  return `v${y}.${m}.${d}`;
}

function updateCitation(cff: string, version: string, date: string): string {
  return cff
    .replace(/^version:\s*.*$/m, `version: ${version}`)
    .replace(/^date-released:\s*.*$/m, `date-released: ${date}`);
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }

  const repoDir = resolve(args.repo);
  const citationFile = resolve(args.citation.startsWith("/") ? args.citation : join(repoDir, args.citation));
  const packageJsonPath = resolve(join(repoDir, "package.json"));

  await access(packageJsonPath, constants.R_OK);
  await access(citationFile, constants.R_OK | constants.W_OK);

  const lastCommitDate = getLastCommitDate(repoDir);
  let version: string;

  if (args.versionSource === "date") {
    version = formatDateAsVersion(lastCommitDate);
  } else {
    const pkg = await readJsonFile<{ version: string }>(packageJsonPath);
    version = ensureV(pkg.version);
  }

  if (args.verbose) {
    console.log(`[info] Using version: ${version}`);
    console.log(`[info] Using release date: ${lastCommitDate}`);
  }

  const oldCff = await readFile(citationFile, "utf8");
  const newCff = updateCitation(oldCff, version, lastCommitDate);

  if (oldCff === newCff) {
    console.log("[info] CITATION.cff already up to date.");
    return;
  }

  if (args.dryRun) {
    console.log("[dry-run] Would update version/date in CITATION.cff");
    return;
  }

  await writeFile(citationFile, newCff, "utf8");
  console.log("[ok] CITATION.cff updated.");

  if (args.commit) {
    execSync(`git add -- "${citationFile}"`, { cwd: repoDir, stdio: "inherit" });
    execSync(`git commit -m "build: update citation file"`, { cwd: repoDir, stdio: "inherit" });
  } else {
    console.log("[info] --no-commit specified, not committing changes.");
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error("[error] " + err.message);
    process.exit(1);
  });
}
