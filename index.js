const consoleLogRule = process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : ['warn'];

module.exports = {
  'extends': [
    'plugin:angular/johnpapa',
    '@enspirit/eslint-config-node'
  ],
  rules: {
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
