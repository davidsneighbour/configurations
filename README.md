# Configuration packages for @davidsneighbour

[![GitHub issues](https://img.shields.io/github/issues-raw/davidsneighbour/configurations?logo=github&style=for-the-badge)](https://github.com/davidsneighbour/configurations/issues) ![LastChanges](https://img.shields.io/github/last-commit/davidsneighbour/configurations?color=%23ff7700&logo=github&style=for-the-badge) ![License](https://img.shields.io/github/license/davidsneighbour/configurations?logo=github&style=for-the-badge)

## Release management

### Regular release

Release all packages that changed since the last release. 

```bash
npm run release
```

### Forced release

Release all packages with their next version increment, even if no changes were made. This will release either patch or minor versions, depending on the changes in the packages.

```bash
npm run release:force
```

### Major release

Release all packages with a new major version (yearly update).

```bash
lerna publish major --force-publish
```
