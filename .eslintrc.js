module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  rules: {
    semi: [2, 'never'],
    'func-names': 0,
    'function-paren-newline': 0,
    'no-underscore-dangle': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'ignore',
        imports: 'never',
        exports: 'never',
        functions: 'ignore',
      },
    ],
    'function-parent-newline': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': [1, { ignorePureComponents: true }],
    'no-mixed-operators': 0,
    'no-prototype-builtins': 0,
    'array-callback-return': 0,
    'consistent-return': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: true,
        optionalDependencies: true,
      },
    ],
    'no-plusplus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
  },
}
