module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'jest', 'prettier'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'linebreak-style': ['error', 'unix'],
        eqeqeq: 'error',
        'object-curly-spacing': ['error', 'always'],
        'no-console': 0,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': 'error',
    },
};