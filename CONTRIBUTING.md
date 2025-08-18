# 🤝 Contributing to CorpFin Pro

Thank you for your interest in contributing to CorpFin Pro! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and Next.js

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/corpfin-pro.git
   cd corpfin-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📋 Contribution Guidelines

### Code Style
- Follow the existing code style and conventions
- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write meaningful commit messages

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tooling changes

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, well-documented code
   - Add tests for new functionality
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide a clear description of changes
   - Include screenshots for UI changes
   - Reference any related issues

## 🎯 Areas for Contribution

### High Priority
- Bug fixes and performance improvements
- Security enhancements
- Documentation improvements
- Test coverage

### Medium Priority
- New UI components
- Additional financial features
- Integration improvements
- Accessibility enhancements

### Low Priority
- Code refactoring
- Tooling improvements
- Documentation updates

## 🧪 Testing

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests
npm run e2e

# Test coverage
npm run test:coverage
```

### Writing Tests
- Write tests for all new functionality
- Maintain good test coverage
- Use descriptive test names
- Follow testing best practices

## 📝 Documentation

### Code Documentation
- Add JSDoc comments for functions and components
- Include TypeScript types for all functions
- Document complex business logic

### User Documentation
- Update README.md for new features
- Add screenshots for UI changes
- Include usage examples

## 🐛 Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information
- Screenshots if applicable

## 💡 Feature Requests

When suggesting features, please include:
- Clear description of the feature
- Use case and benefits
- Mockups or examples if applicable
- Priority level

## 📞 Getting Help

- Create an issue for questions
- Join our community discussions
- Check existing documentation
- Review existing issues and PRs

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to CorpFin Pro! 🎉
