# AGENTS.md

This file provides guidance to Coding Agents when working with code in this repository.

## Project Overview

This is the documentation site for **DealDroid** - an AI Sales Agent platform. Built with **Astro** and the **Starlight** documentation theme, it supports multi-language content (English and Thai) and uses MDX for content authoring.

## Development Commands

```bash
# Start development server (localhost:4321)
pnpm dev

# Build production site to ./dist/
pnpm build

# Preview production build locally
pnpm preview

# Translate English docs to Thai (requires ANTHROPIC_API_KEY)
pnpm translate

# Run spell check
pnpm spellcheck
```

## Git Hooks

Lefthook is configured for pre-commit hooks:
- **Prettier** automatically formats staged `.js`, `.ts`, `.jsx`, `.tsx` files
- **cspell** spell-checks staged files (supports Thai characters)

## Architecture

### Content Structure

```
src/
├── assets/              # Images organized by section (getting_start, tuning, faq, etc.)
├── content/
│   └── docs/           # English documentation (.mdx files)
│   └── docs/th/        # Thai translations
├── config/
│   └── sidebar.json    # Navigation configuration with translations
└── styles/
    ├── global.css      # Base styles (Starlight + Tailwind)
    └── custom.css      # Custom scrollbars, horizontal rules
```

### Key Configuration

**`astro.config.mjs`**:
- i18n configured for English (default) and Thai
- Path alias `@` resolves to `./src`
- Logo click redirects to https://dealdroid.net
- Expressive Code with word wrap enabled

**`sidebar.json`**:
- Uses `autogenerate` for directories - new .mdx files are auto-included in navigation
- Section labels have `translations` object for Thai labels

### MDX Frontmatter Pattern

```yaml
---
title: Page Title
description: One-line summary
sidebar:
  order: 1  # Optional: controls ordering in sidebar
---
```

### Image Paths

Use the `@/assets/` alias for images:
```mdx
![Alt text](@/assets/getting_start/filename.png)
```

Images are organized by section matching the content structure.

### Custom Styling

- Custom scrollbar styling for sidebar (supports dark mode)
- Horizontal rule style: `• • •` (Medium-style dots)
- Located in `src/styles/custom.css`

## Translation Workflow

The `translate-docs.js` script uses the Anthropic API to translate English docs to Thai:

1. Set `ANTHROPIC_API_KEY` environment variable
2. Run `pnpm translate`
3. Script preserves:
   - Image paths (`@/assets/...`)
   - Component imports
   - Code blocks
   - Technical terms (DealDroid, Droid, Intent, etc.)
   - Markdown formatting

Thai translations go in `src/content/docs/th/` with the same directory structure as English.

## Documentation Writing Guidelines

See `.github/copilot-instructions.md` for comprehensive documentation writing guidelines, including:

- **Tone**: Friendly, approachable, conversational but professional
- **Structure**: Opening hook → horizontal rule → "Why X Matters" → how-to sections → examples
- **Asides**: Maximum 2 per page; use `<Aside>` from Starlight for critical messages only
- **Section patterns**: Different structures for Getting Started, Tuning, FAQ, and Third-Party integration docs
- **Emojis**: Use strategically for visual hierarchy (not overused)
- **Code examples**: Always complete, realistic, with context

### Key Writing Patterns

- Use `---` horizontal rules between major sections
- Number steps with `## Step 1:`, `## Step 2:`, etc.
- For callouts: use `<Aside type="tip|caution|danger">` for critical messages; use `> **Note:**` blockquotes for general notes
- Field documentation pattern: `### Field Name` → one-line explanation → **Tips:** bullets → **Example:** → additional context

## Dependencies

- **@astrojs/starlight**: Documentation theme
- **@tailwindcss/vite**: Tailwind CSS integration
- **@anthropic-ai/sdk**: Translation automation
- **astro-embed**: External content embedding
- **astro-vtbot**: Version management for changelogs
