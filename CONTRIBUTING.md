# Contributing to Home Cover GPT

Thank you for your interest in contributing to Home Cover GPT! This document provides guidelines for submitting issues and pull requests.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Code Style](#code-style)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem** in as many details as possible
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include details about your configuration and environment**

### Suggesting Enhancements

If you have a suggestion for a new feature or improvement, please:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see instead**

## Pull Requests

### Before Submitting a Pull Request

1. **Fork the repository**
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the code style guidelines
4. **Test your changes** thoroughly
5. **Commit your changes** using conventional commit format
6. **Push to your fork** and submit a pull request

### Branch Naming Conventions

Use the following format for branch names:

- `feature/description` - for new features
- `fix/description` - for bug fixes
- `docs/description` - for documentation changes
- `chore/description` - for maintenance tasks

Examples:
- `feature/add-policy-comparison`
- `fix/pdf-upload-error`
- `docs/update-api-documentation`

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Examples:**
```
feat: add policy comparison feature
fix: resolve PDF upload timeout issue
docs: update API documentation
style: format code with prettier
refactor: extract policy analysis logic
test: add unit tests for coverage analysis
chore: update dependencies
```

### Pull Request Process

1. **Update the README.md** with details of changes if applicable
2. **Update the API documentation** if you're changing endpoints
3. **Add tests** for new functionality
4. **Ensure all tests pass** before submitting
5. **Update the CHANGELOG.md** with a brief description of your changes

### Review Process

1. **Automated checks** must pass (linting, tests, build)
2. **Code review** by maintainers
3. **Address feedback** and make requested changes
4. **Maintainer approval** required for merge

## Development Setup

### Prerequisites

- Node.js (>=16.x)
- npm (>=8.x) or Yarn
- Git

### Local Development

1. **Fork and clone** the repository
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   # Add your OPENAI_API_KEY to .env.local
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Run tests**:
   ```bash
   npm test
   ```
6. **Run linting**:
   ```bash
   npm run lint
   ```

## Code Style

### TypeScript

- Use TypeScript for all new code
- Follow the existing type definitions in `shared/types.ts`
- Use strict type checking
- Prefer interfaces over types for object shapes

### React/Next.js

- Use functional components with hooks
- Follow the existing component structure
- Use TypeScript for all components
- Prefer server-side rendering when possible

### Styling

- Use Tailwind CSS for styling
- Follow the existing design system
- Use the shadcn/ui components when available
- Maintain responsive design

### Testing

- Write unit tests for new functionality
- Use Vitest for testing
- Follow the existing test patterns
- Aim for good test coverage

### File Organization

- Keep components in the `components/` directory
- Keep API routes in `pages/api/`
- Keep utilities in `lib/`
- Keep types in `shared/types.ts`

### Error Handling

- Use proper error boundaries
- Provide meaningful error messages
- Log errors appropriately
- Handle edge cases gracefully

## Getting Help

If you need help with any aspect of contributing:

1. **Check existing issues** for similar questions
2. **Search the documentation** for relevant information
3. **Create a new issue** with the `question` label
4. **Join our discussions** in the GitHub Discussions section

Thank you for contributing to Home Cover GPT! 🚀