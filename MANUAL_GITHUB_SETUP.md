# 🚀 Ручная загрузка CorpFin Pro на GitHub

## ⚠️ Проблема с PowerShell

Если PowerShell добавляет символы перед командами (например, `сgit` вместо `git`), используйте эту инструкцию.

## 📋 Пошаговая инструкция

### Шаг 1: Создайте репозиторий на GitHub

1. Откройте браузер и перейдите на [https://github.com/new](https://github.com/new)
2. Заполните форму:
   - **Repository name**: `corpfin-pro`
   - **Description**: `Professional corporate finance management platform`
   - **Visibility**: Public или Private
   - **НЕ** ставьте галочки на "Add a README file", "Add .gitignore", "Choose a license"
3. Нажмите "Create repository"

### Шаг 2: Используйте Git Bash или Command Prompt

**Вариант A: Git Bash (рекомендуется)**
1. Установите Git с [https://git-scm.com/](https://git-scm.com/)
2. Откройте Git Bash в папке проекта
3. Выполните команды ниже

**Вариант B: Command Prompt**
1. Откройте Command Prompt (cmd) в папке проекта
2. Выполните команды ниже

### Шаг 3: Выполните команды

Скопируйте и вставьте эти команды по одной:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "feat: initial commit - CorpFin Pro corporate finance platform"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/YOUR_USERNAME/corpfin-pro.git
```
*(Замените YOUR_USERNAME на ваше имя пользователя GitHub)*

```bash
git push -u origin main
```

## 🔧 Альтернативные способы

### Способ 1: GitHub Desktop
1. Скачайте [GitHub Desktop](https://desktop.github.com/)
2. Откройте папку проекта
3. Следуйте инструкциям в интерфейсе

### Способ 2: VS Code
1. Откройте проект в VS Code
2. Нажмите Ctrl+Shift+P
3. Введите "Git: Initialize Repository"
4. Следуйте инструкциям

### Способ 3: Web Interface
1. Создайте репозиторий на GitHub
2. Загрузите файлы через веб-интерфейс
3. Не рекомендуется для больших проектов

## 🎯 Что должно получиться

После успешной загрузки:
- ✅ Все файлы проекта на GitHub
- ✅ Красивый README.md
- ✅ Правильная структура
- ✅ Готовность к использованию

## 🆘 Если не работает

### Проблема: "git не является внутренней или внешней командой"
**Решение**: Установите Git с [https://git-scm.com/](https://git-scm.com/)

### Проблема: Ошибка аутентификации
**Решение**: 
1. Настройте SSH ключи или
2. Используйте Personal Access Token

### Проблема: Файлы не загружаются
**Решение**: Проверьте `.gitignore` - возможно, файлы исключены

## 📞 Нужна помощь?

Если ничего не помогает:
1. Используйте GitHub Desktop
2. Обратитесь к документации GitHub
3. Проверьте настройки Git

**Удачи! 🚀**
