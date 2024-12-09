export default [
    {
      files: ["src/**/*.js"], // Apply these rules to all .js files
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      rules: {
        quotes: ["error", "double"], // Enforce double quotes
      },
    },
  ];