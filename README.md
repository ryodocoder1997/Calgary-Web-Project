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