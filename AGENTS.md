# Repository Guidelines

## Project Structure & Module Organization

This repository contains a static, bilingual (Uzbek/Russian) business analytics landing page.

- `index.html`: page markup, inline SVG graphics, accessibility attributes, and contact form.
- `css/style.css`: shared design variables, component styles, and responsive layouts.
- `js/script.js`: translations, language selection, mobile navigation, animated counters, and form submission.
- `worker/telegram-relay.js`: Cloudflare Worker that validates contact requests and forwards them to Telegram.

There is no dedicated assets directory, test directory, package manifest, or build pipeline. Fonts load from Google Fonts. The ignored `venv/` directory is a local environment, not a website dependency.

## Build, Test, and Development Commands

Run commands from the repository root:

- `python -m http.server 8000 --bind 127.0.0.1`: serve the site locally; open `http://127.0.0.1:8000`.
- `node --check js/script.js`: check browser JavaScript syntax when Node.js is available.
- `git diff --check`: catch whitespace errors before committing.

No compilation or dependency installation is required for the frontend. The static server does not execute the Worker; its deployment instructions are in `worker/telegram-relay.js`.

## Coding Style & Naming Conventions

Use two-space indentation and preserve surrounding formatting. Keep JavaScript semicolons and the browser script's strict-mode IIFE structure. Use camelCase for JavaScript identifiers and kebab-case for CSS classes. Reuse CSS custom properties from `:root` for colors, spacing, and shared styling.

Keep files UTF-8. Add matching `uz` and `ru` translations for new copy, using existing dotted keys such as `form.submit` and matching `data-i18n` attributes. No formatter or linter is configured.

## Testing Guidelines

There is no automated test framework, test naming convention, or coverage threshold. Manually check both languages, mobile and desktop layouts, navigation, keyboard access, and counters. For form changes, verify required-field validation, loading, success, and failure states using a test Worker/chat or mocked responses. Check the browser console for errors.

## Commit & Pull Request Guidelines

Existing commits use short Russian action-oriented subjects without Conventional Commit prefixes. Follow that style and keep commits focused. PRs should describe the change, link relevant issues, list verification performed, and include desktop/mobile screenshots for visual changes.

## Security & Configuration

Store `BOT_TOKEN` and `CHAT_ID` as Worker secrets. Set `ALLOWED_ORIGIN` to the intended site origin and configure `data-endpoint` on `#contactForm` with the Worker URL. Never commit credentials or place Telegram secrets in frontend files.
