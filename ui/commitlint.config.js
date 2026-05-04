module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, 'always',
      [
        'feat',     // new feature
        'fix',      // bug fix
        'docs',     // documentation
        'style',    // formatting only
        'refactor', // code change no fix/feature
        'test',     // adding tests
        'chore',    // build process, dependencies
        'perf',     // performance improvement
        'ci',       // CI/CD changes
        'revert'    // revert a commit
      ]
    ],
    'subject-max-length': [2, 'always', 72],
    'subject-case': [2, 'always', 'lower-case']
  }
};
