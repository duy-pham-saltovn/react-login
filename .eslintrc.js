module.exports = {
    "env": {
        "commonjs": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
};