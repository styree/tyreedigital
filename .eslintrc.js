module.exports = {
    'extends': 'airbnb',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'func-names': [
            'error',
            'never'
        ],
        'no-useless-escape': 0,
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
        'no-multiple-empty-lines': ['error', {
            'max': 1,
            'maxBOF': 0,
            'maxEOF': 1
        }],
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        'semi': ['error', 'always'],
        'indent': ['error', 'tab', { 'SwitchCase': 1 }],
        'spaced-comment': ['error', 'always'],
        'react/jsx-uses-vars': 2
    }
};
