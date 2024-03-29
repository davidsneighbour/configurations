const config = {
  // for available commit-and-tag-version options see
  // https://github.com/absolute-version/commit-and-tag-version
  scripts: {
    prerelease: "./bin/release/prerelease",
    // prerelease:
    // prebump / postbump
    // prechangelog / postchangelog
    // precommit/ postcommit
    // pretag / posttag
  },
  bumpFiles: [
    {
      filename: "package.json",
      type: "json",
    },
  ],
  skip: {
    // changelog: true
  },

  // for available options in the conventional changelog configuration spec see
  // https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.2.0/README.md
  header: "Changelog",
  types: [
    { type: "build", section: "Build System" },
    { type: "chore", section: "Chore" },
    { type: "ci", section: "CI" },
    { type: "docs", section: "Documentation" },
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "perf", section: "Performance" },
    { type: "refactor", section: "Refactors", hidden: true },
    { type: "revert", section: "Reverts" },
    { type: "style", section: "Styling" },
    { type: "test", section: "Tests" },
    { type: "theme", section: "Theme" },
  ],
};
export default config;
