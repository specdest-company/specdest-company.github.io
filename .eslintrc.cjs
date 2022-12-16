module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    "prettier" // Add this line!
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    "react-hooks",
    "prettier"
  ],
  'rules': {
    "no-console": ["error", { allow: ["error"] }],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    },
    "react": {
      "version": "detect",
    }
  }
};
