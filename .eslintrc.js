module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },

  extends: 'airbnb-base',

  env: {
    browser: true,
    es6: true,
  },

  // required to lint *.vue files
  plugins: [
    'import',
    'html',
  ],

  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.babel.js',
      },
    },
  },

  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never',
    }],
  }
}
