# Project overview — @davidsneighbour/configurations

Monorepo of shared, publishable configuration packages used across David's Neighbour
projects (ESLint, Stylelint, Prettier, Webpack, Babel, Bootstrap, Commitlint, etc.).
Each package under `packages/*` is published to npm under the `@davidsneighbour/` scope.

## Stack & tooling

- **Package manager:** npm workspaces (`workspaces: ["packages/*"]`), `npm >= 11.6.0`.
- **Monorepo / release:** [Lerna](https://lerna.js.org) (`lerna.json`) with independent
  date-based versions (e.g. `2026.0.5`). Publishing uses npm **trusted publishing**
  (provenance), triggered manually via the `release.yml` GitHub Actions workflow.
- **Task runner:** [wireit](https://github.com/google/wireit) wraps the root `lint`
  and `update` scripts.
- **Module system:** ESM (`"type": "module"`). TypeScript is used for scripts only.
- **Node:** `engines.node` is `^24 || ^25 || ^26`. Note `.nvmrc` currently pins an
  older version — prefer the `engines` range; flag the mismatch rather than trusting
  `.nvmrc`.

## Layout

- `packages/*` — the individual config packages, each with its own `package.json`,
  `README.md`, `CHANGELOG.md` and entry point (usually `index.js`).
- `scripts/update-citation.ts` — regenerates `CITATION.cff` during release.
- `.github/dependabot.yml` — dependency update config (grouped updates).
- `.github/workflows/` — `release.yml` (manual publish) and
  `watch-upstream-releases.yml`.

## Common commands

- `npm install` — install all workspace deps.
- `npm run lint` — runs `lint:lockfiles` (lockfile-lint validating
  `package-lock.json`: https-only, allowed host `npm`, package names, checksums,
  integrity). This is the closest thing to a test suite — **run it after any
  dependency change.**
- `npm run update` — `npm-check-updates -u` + `fixpack`, then commits.
- Per-package scripts exist (e.g. `eslint:config`, `fixpack`) but there is **no
  unit-test suite**; validation is lint + successful install.

## Conventions

- **Commits:** Conventional Commits. Dependency bumps use `build(deps): ...`,
  chores use `chore(...)`. The release version is derived from commit messages.
- **Versions:** calendar-style (`YYYY.MINOR.PATCH`), managed by Lerna — do not hand-edit.
- Keep changes minimal and scoped to one package where possible.

## Working on Dependabot PRs

This repo receives many grouped Dependabot PRs. To validate one:

1. Check out the PR branch (`gh pr checkout <num>`).
2. `npm install` to sync `node_modules` with the updated `package-lock.json`.
3. `npm run lint` to validate the lockfile.
4. Merge if green (`gh pr merge <num> --squash` or per repo preference).

Because most bumps only touch `package-lock.json` / a single dependency line,
merging one PR can require the others to rebase — Dependabot rebases automatically,
but conflicts in `package-lock.json` are the usual failure mode.
