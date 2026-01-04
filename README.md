# Configuration packages for @davidsneighbour

[![GitHub issues](https://img.shields.io/github/issues-raw/davidsneighbour/configurations?logo=github&style=for-the-badge)](https://github.com/davidsneighbour/configurations/issues) ![LastChanges](https://img.shields.io/github/last-commit/davidsneighbour/configurations?color=%23ff7700&logo=github&style=for-the-badge) ![License](https://img.shields.io/github/license/davidsneighbour/configurations?logo=github&style=for-the-badge)

## Release management

Release is done via [trusted publishing](https://docs.npmjs.com/trusted-publishers).

* (once every three months) [create token on npmjs.org](https://www.npmjs.com/settings/davidsneighbour/tokens/)
* (once every three months) [add/update token on the repositories action secrets and variables settings](https://github.com/davidsneighbour/configurations/settings/secrets/actions)
* release by manually running the [release.yml workflow](https://github.com/davidsneighbour/configurations/actions/workflows/release.yml)

The release version number is defined by semantic commit messages.
