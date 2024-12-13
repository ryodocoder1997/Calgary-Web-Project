# Calgary Web Project - Setup & Information

This document outlines the project setup and provides essential information to help you get started.

## Project Overview

This project, named `calgary-web-project`, is a web application built using Next.js, React, and TypeScript. It's designed to be a modern, performant, and maintainable web project.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

-   **Node.js:** Version 18 or higher. You can download it from [nodejs.org](https://nodejs.org/).
-   **npm:**  Node Package Manager (should come with Node.js).

## Setup Instructions

Follow these steps to get the project up and running:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/ryodocoder1997/Calgary-Web-Project.git
    cd calgary-web-project
    ```
    
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
    This command will install all the necessary packages listed in the `package.json` file.

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    This command starts the Next.js development server. The application will usually be available at `http://localhost:3000`.

## Key Scripts

Here's a breakdown of the scripts defined in `package.json`:

-   `dev`: Starts the Next.js development server using Turbopack. This is what you will use for development.
    ```bash
    npm run dev
    ```
-   `build`: Builds the application for production deployment.
    ```bash
    npm run build
    ```
-   `start`: Starts the production build of the application.
    ```bash
    npm run start
    ```
-   `lint`: Runs ESLint to identify potential code quality issues.
    ```bash
    npm run lint
    ```
-   `format`: Formats all project files using Prettier.
    ```bash
     npm run format
    ```
-   `format-write`: Formats all project files using Prettier and applies the changes.
    ```bash
      npm run format-write
    ```
-  `format-check`: Checks all the project files using Prettier for formatting errors.
    ```bash
      npm run format-check
    ```
-  `prepare`: Installs Husky git hooks after running npm install
    ```bash
    npm run prepare
    ```

## Project Structure

*   `package.json`: Contains project metadata, dependencies, and scripts.
*   `src/`: The primary source code directory.
    *   `app/`: Contains Next.js application routes. Each folder in this directory represents a route in your application (e.g., `app/dashboard` for `/dashboard`).
        *   `page.tsx` or `page.jsx`: Required for every route, contains the main React component for the route.
        *   `layout.tsx` or `layout.jsx`: Optional, defines the layout of components for a specific route or route segment.
    *   `components/`: Reusable React components.
    *   `styles/`: Contains CSS, potentially using Tailwind.
*   `node_modules/`:  Contains the installed npm packages.
*   `.husky`: Contains the git hooks for commitlint and lint-staged

## Technologies Used

*   **Next.js:** A React framework for building web applications. It provides server-side rendering, routing, and more.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **Tailwind CSS:** A utility-first CSS framework.
*   **ESLint:** A JavaScript linter to find potential issues.
*   **Prettier:** A code formatter to ensure a consistent style.
*   **Husky:** Used for setting up Git hooks for code quality check.
*   **Lint-staged:** Run linters on files that are about to be committed.
*   **Commitlint:** A tool to enforce conventional commit messages.

## Code Style & Best Practices

-   **Linting:**  We use ESLint to enforce consistent coding style and catch errors. Run `npm run lint` to check your code.
-   **Formatting:** Prettier ensures consistent code formatting. Use `npm run format-write` to format code, `npm run format-check` to check for errors
-   **Commits:**  We enforce conventional commit messages using Commitlint. This helps maintain a clear commit history.
-   **Git Hooks:** Husky and lint-staged are set up to run linters and formatters before commits.

## Contributing

1.  Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b feature/my-new-feature
    ```
2.  Make your changes.
3.  Ensure all tests pass.
4.  Commit your changes and push the branch
    ```bash
    git add .
    git commit -m "feat: Adds a new feature"
    git push origin feature/my-new-feature
    ```
5.  Create a pull request to merge your changes into the `main` branch.

## Troubleshooting

-   **Dependencies Issues:** If you have issues with dependencies, try deleting `node_modules` and running `npm install` again.
-   **Other Errors:** If you encounter other errors, please review the error message closely and search for solutions online. If you can't solve it yourself, ask for help.

## Further Reading

-   **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)
-   **React Documentation:** [https://react.dev/](https://react.dev/)
-   **TypeScript Documentation:** [https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
-   **Tailwind CSS Documentation:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
-   **ESLint Documentation:** [https://eslint.org/docs/latest/](https://eslint.org/docs/latest/)
-   **Prettier Documentation:** [https://prettier.io/docs/en/index.html](https://prettier.io/docs/en/index.html)
-   **Husky Documentation:** [https://typicode.github.io/husky/](https://typicode.github.io/husky/)
-   **Lint-staged Documentation:** [https://github.com/okonet/lint-staged](https://github.com/okonet/lint-staged)
-   **Commitlint Documentation:** [https://commitlint.js.org/#/](https://commitlint.js.org/#/)

# Commit Message Guidelines

We use the [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) preset to enforce commit message structure.

## Tags (Type - Required)

*   `feat`: New feature
    *   Example: `feat(auth): implement user login`
*   `fix`: Bug fix
    *   Example: `fix(ui): correct button alignment`
*   `docs`: Documentation changes
    *   Example: `docs: update api documentation`
*   `style`: Code formatting (no logic change)
    *   Example: `style(components): fix formatting of components`
*   `refactor`: Code refactoring (no new features or bug fixes)
    *   Example: `refactor(database): optimize database queries`
*   `perf`: Performance improvement
    *   Example: `perf(data-processing): improve data caching`
*   `test`: Add or modify tests
    *   Example: `test(auth): add tests for login function`
*   `build`: Changes to build system/dependencies
    *   Example: `build: upgrade webpack version`
*   `ci`: Changes to CI/CD pipeline
    *   Example: `ci: update deployment workflow`
*   `chore`: Other non-`src`/`test` changes
    *   Example: `chore: update dependencies`
*  `revert`: Reverts a previous commit
    *    Example: `revert: feat(user): revert user login feature`

## Rules

1.  **Format:** `<type>(<scope>): <description>`
    *   `type`:  Use a tag from the list above (required) and must be in lowercase.
    *   `scope` (Optional): A specific module, component, or area of the codebase affected by the change. If the change impacts multiple areas or cannot be specified, it can be omitted.
    *   `description`: Concise summary of the change in imperative mood (e.g., "add...", "fix..."). Must be in lowercase.

2.  **Description:**
    *   Maximum 50 characters.
    *    Must be in lowercase.
    *   Use imperative verb tense (e.g., "fix", "add", not "fixed" or "adding").
    *   Do not end with a period.

3.  **Body (Optional):**
    *   More detail if needed, separate from the subject with a blank line.

4.  **Footer (Optional):**
    *   For issues, use `Closes #123`.
    *   Use `BREAKING CHANGE: <Description>` for breaking changes. A commit with a breaking change **must** include the breaking change footer.
    *   Separate from body with a blank line.

## Examples

*   `feat(user): add user profile editing`
*   `fix(form): correct validation error messages`
*   `docs: update installation guide`
*   `refactor(auth): improve login logic`
*   `test(auth): add unit tests for user service`
*   `build: upgrade node.js version`
*   `chore: update dependencies`
*  `revert: fix(auth): revert login logic`
*   `feat(payment): implement new payment gateway`

    this change introduces a new payment method and improves the current flow.

    closes #456

    `BREAKING CHANGE: the payment api has been updated with new request requirements.`

**Important:** Your commits will be validated against these rules automatically.