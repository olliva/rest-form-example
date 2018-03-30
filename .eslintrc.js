module.exports = {
    "env": {
        "es6": true
    },
    "extends": "google",
    "rules": {
        "max-len": ["error", { "code": 120 }],
        "new-cap": 0,
        "require-jsdoc": [
            "error", {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition": false,
                    "ClassDeclaration": false,
                    "ArrowFunctionExpression": false,
                    "FunctionExpression": false
                }
            }
        ]
    },
    "parserOptions": {
        "sourceType": "module"
    }
};
