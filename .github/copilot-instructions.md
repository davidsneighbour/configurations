# GitHub Copilot instructions — @davidsneighbour/configurations

This repository is a **Lerna + npm-workspaces monorepo** of shared, publishable
configuration packages (`@davidsneighbour/eslint-config`, `stylelint-config`,
`prettier-config`, `webpack-config`, `babel-config`, `bootstrap-config`,
`commitlint-config`, `tools`, etc.). Each package lives in `packages/*` and is
published to npm under the `@davidsneighbour/` scope.

## Key facts

- **ESM only** (`"type": "module"`). TypeScript only in `scripts/`.
- npm workspaces; needs `npm >= 11.6.0`, Node `^24 || ^25 || ^26`.
- Tasks run through [wireit](https://github.com/google/wireit).
- Versions are calendar-based (e.g. `2026.0.5`) and managed by **Lerna** — never
  hand-edit a package version.
- No unit tests: validation is `npm install` + `npm run lint` (lockfile-lint).

## When suggesting code or commits

- Follow **Conventional Commits**. Use `build(deps): ...` for dependency updates;
  `chore(...)`, `fix(...)`, `feat(...)` otherwise. Release version is derived from
  commit messages.
- Keep changes minimal and scoped to a single package when possible.
- After any dependency change, run `npm run lint` to validate `package-lock.json`.
- Match the existing style of the package you are editing.

## Don't

- Don't introduce CommonJS (`require`) into ESM packages.
- Don't bump or rewrite version numbers manually.
- Don't add a build/test framework — there isn't one by design.
