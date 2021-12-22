module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-undef": 0,
    "react/prop-types": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },

  // Parsing error: The keyword 'import' is reserved eslint 해결
  parser: "babel-eslint",
};
