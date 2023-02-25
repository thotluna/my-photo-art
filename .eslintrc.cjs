module.exports = {
  // ...
  extends: [
    // ...
    'standard',
    'plugin:react/recommended',
    'plugin:astro/recommended'
  ],
  rules: {
    'no-tabs': 'off',
		indent: 'off',
		'space-before-function-paren': 'off',
    'react/react-in-jsx-scope': 'off',
		'react/no-unknown-property': 'off'
},
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      }
    }
    // ...
  ]
}
