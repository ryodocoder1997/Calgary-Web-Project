import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Apply rules to all JS/TS files
    rules: {
      'no-unused-vars': 'warn', // Warn on unused variables
      'no-console': 'warn', // Warn on console logs, consider "error" for production.
      'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks
      'react-hooks/exhaustive-deps': 'warn', // Warn if deps are missing for hooks.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../**'],
              message:
                'Using relative imports to other modules can be confusing. Consider using absolute paths instead.',
            },
          ],
        },
      ],
      'import/no-duplicates': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]

export default eslintConfig
