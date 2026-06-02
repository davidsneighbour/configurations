# AGENTS.md — @davidsneighbour/configurations

Guidance for AI coding agents (OpenAI Codex and compatible tools) working in this repo.
For Claude-specific notes see `CLAUDE.md`; the two are kept in sync.

## What this is

A Lerna + npm-workspaces monorepo of shared, publishable configuration packages
(`@davidsneighbour/eslint-config`, `stylelint-config`, `prettier-config`,
`webpack-config`, `babel-config`, `bootstrap-config`, `commitlint-config`, `tools`,
and more). Each lives in `packages/*` and is published to npm under the
`@davidsneighbour/` scope via npm trusted publishing.

## Environment

- npm workspaces; requires `npm >= 11.6.0` and Node `^24 || ^25 || ^26`
  (the `.nvmrc` may be stale — trust `package.json` `engines`).
- ESM only (`"type": "module"`). TypeScript is used only for `scripts/`.
- Task running via [wireit](https://github.com/google/wireit).

## Setup & validation

```bash
npm install      # install all workspaces
npm run lint     # validate package-lock.json with lockfile-lint
```

There is **no unit-test suite**. "Passing" means `npm install` succeeds and
`npm run lint` is green. Always run `npm run lint` after touching any dependency.

## Project map

- `packages/*` — individual config packages (own `package.json` / `index.js` / README).
- `scripts/update-citation.ts` — updates `CITATION.cff` on release.
- `.github/dependabot.yml`, `.github/workflows/release.yml` — automation.

## Rules for changes

- Use **Conventional Commits**: `build(deps): ...` for dependency bumps,
  `chore(...)`, `fix(...)`, `feat(...)` otherwise. Release versioning depends on this.
- Versions are calendar-based and managed by Lerna — never hand-edit a package version.
- Keep edits scoped and minimal; prefer changing one package at a time.
- Do not commit, push, or publish unless explicitly asked.

## Dependabot PR workflow

1. `gh pr checkout <num>`
2. `npm install` (sync lockfile → node_modules)
3. `npm run lint`
4. Merge when green; expect `package-lock.json` rebase churn across the many open PRs.
