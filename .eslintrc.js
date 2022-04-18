module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends":
    "airbnb-base",
  "parserOptions": {
    "ecmaVersion": 'latest',
    "sourceType": 'module',
  },
  "rules": {
    "no-plusplus": "off",
    "max-len": ["error", 145]
  },
};