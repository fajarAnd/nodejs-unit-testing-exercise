module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    "max-line-length": [
      true,
      {
        "limit": 100,
        "ignore-pattern": "^import "
      }
    ],
  },
};
