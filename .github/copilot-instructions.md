# DealDroid Documentation Writing Guidelines

## Project Overview

This is the official documentation for **DealDroid** - an AI Sales Agent platform that helps businesses engage, sell, and support customers 24/7 across multiple messaging channels. The documentation uses Astro with Starlight theme and supports multiple languages (English, Thai, French).

## Core Documentation Principles

### 1. Tone and Voice

- **Friendly and approachable** - Write like you're explaining to a friend
- **Use emojis strategically** - Add personality to bullet points and sections (🎯, 💬, ⚡, 🛡, etc.)
- **Conversational but professional** - Balance expertise with accessibility
- **Empathetic** - Acknowledge user pain points and challenges
- **Action-oriented** - Guide users to complete tasks successfully

### 2. Structure and Consistency

#### Frontmatter Format (YAML)

```yaml
---
title: [Clear, Descriptive Title]
description: [One-line summary of the page content]
sidebar:
  order: [number] # Optional: for ordering in sidebar
---
```

#### Document Flow Pattern

1. **Opening Hook** - Start with a compelling statement about what users will learn or accomplish
2. **Horizontal Rule** (`---`) after the intro
3. **"Why X Matters"** section - Explain the value/importance
4. **How-to sections** with clear headings
5. **Examples and screenshots** with descriptive alt text
6. **Field-by-field explanations** for forms/interfaces
7. **Real-world examples** at the end when applicable

### 3. Visual Elements

#### Screenshots

- Always use relative paths: `![Alt text](@/assets/folder/filename.png)`
- Use descriptive alt text that explains what the image shows
- Place screenshots immediately after mentioning the UI element

#### Code Blocks

- Use triple backticks with language identifier
- Add explanatory comments for complex examples
- Provide both simple and real-world examples

#### Components

Import Starlight components when needed:

```mdx
import { Card, CardGrid } from "@astrojs/starlight/components";

;
```

#### Asides (Callouts)

**When to Use Asides:**

Asides are special callout boxes that draw attention to important information. Use the `<Aside>` component from Starlight for critical messages only.

**Import:**

```mdx
import { Aside } from "@astrojs/starlight/components";

;
```

**Available Types:**

- `<Aside>` or `<Aside type="note">` (blue) - General information, supplementary details
- `<Aside type="tip">` (purple) - Helpful tips, best practices, pro tips
- `<Aside type="caution">` (yellow) - Important warnings, things to be careful about
- `<Aside type="danger">` (red) - Critical warnings, destructive actions, data loss warnings

**Usage Guidelines:**

⚠️ **MAXIMUM 2 ASIDES PER PAGE** - Overuse diminishes their impact

**Use Asides for:**

- Critical warnings (data loss, irreversible actions)
- Important security or permission notes
- Key tips that significantly improve user experience

**Do NOT use Asides for:**

- General notes (use regular blockquotes `>` instead)
- Minor tips or suggestions
- Additional context that's nice to know but not critical

**Example:**

```mdx
<Aside type="danger">
  Disconnecting will **permanently delete all conversation history**. This
  action cannot be undone.
</Aside>

<Aside type="tip">You can select multiple Pages at once to save time.</Aside>
```

**For less critical callouts, use markdown blockquotes:**

```markdown
> **Note:** You can change this setting later.
> **Tip:** Use descriptive names for easier management.
> **Important:** Make sure you have admin permissions.
```

## Section-Specific Patterns

### Getting Started (`/getting-started/`)

**Purpose:** Onboarding new users, teaching basic setup

**Pattern:**

1. Welcome message with context
2. Screenshot of the relevant UI
3. Step-by-step instructions with ## headings (Step 1, Step 2, etc.)
4. Each step includes:
   - Screenshot
   - Clear numbered instructions
   - Contextual tips in blockquotes (> **Note:** ...)
5. Next steps or related links at the end

**Tone:** Extra friendly and reassuring, assume zero prior knowledge

**Example Structure:**

```mdx
---
title: [Feature Name]
description: [Action-oriented description]
sidebar:
  order: [number]
---

[Welcoming introduction paragraph]

![Descriptive alt text](@/assets/getting_start/filename.png)

[Brief context or overview]

---

## Step 1: [Action Name]

![Step screenshot](@/assets/getting_start/step.png)

[Detailed instructions with context]

> **Note:** [Helpful tip or clarification]

---

## Step 2: [Next Action]

...
```

### Tuning (`/tuning/`)

**Purpose:** Teaching users how to optimize and customize their AI agent

**Pattern:**

1. Hook: "Ready to..." or "Have [problem]? You can..."
2. "Why X Matters" section with bullet points and emojis
3. "How Your AI Uses X" - Explain the technical workflow
4. "How to Access/Setup X" with navigation instructions
5. Interface overview with annotated features
6. "Fields Explained" section with ### subheadings for each field
7. Examples section with complete, realistic scenarios

**Key Elements:**

- Use emoji bullets (🎯, 💬, ⚡, 💰, 📚) for benefits
- Include both simple and complex examples
- Provide markdown code examples wrapped in triple backticks
- Show before/after or input/output patterns

**Field Documentation Pattern:**

```mdx
### Field Name

[One-line explanation of what this field does]

**Tips:**

- [Tip 1]
- [Tip 2]

**Example:** `[Simple example]`

[Additional context or use cases]

---
```

### FAQ (`/faq/`)

**Purpose:** Address common questions and concerns

**Pattern:**

1. Direct problem statement
2. "Why It Matters" section
3. "Why Every Business Needs Different Settings" - Acknowledge diversity
4. Step-by-step solutions
5. Real-world examples section
6. Best practices

**Tone:** Authoritative but empathetic, acknowledge complexity

### Third-Party Integration (`/thirdparty/`)

**Purpose:** Technical documentation for API integration

**Pattern:**

1. Purpose statement with question format
2. "What Can You Do" bullet list
3. "Getting Started" with technical prerequisites
4. Code examples with multiple languages if applicable
5. Authentication and security notes
6. Endpoint documentation with request/response examples
7. Error handling and troubleshooting

**Tone:** Technical and precise, but still accessible

**Code Block Pattern:**

````mdx
```language
[code example]
```
````

**API Documentation Pattern:**

```mdx
### Endpoint Name

**Method:** POST/GET/etc.
**URL:** `/api/path`

**Request Body:**
[Example JSON]

**Response:**
[Example JSON]

**Notes:**

- [Important detail 1]
- [Important detail 2]
```

## Writing Style Guidelines

### Headings

- `#` Main title (automatically from frontmatter)
- `##` Major sections with descriptive names
- `###` Subsections and field names
- Use sentence case, not title case
- Be descriptive and scannable

### Lists

- Use bullets (`-`) for unordered lists
- Use numbers (`1.`) for sequential steps
- Add emojis before list items for visual hierarchy
- Keep items parallel in structure

### Emphasis

- **Bold** for UI elements, buttons, field names, and key terms
- _Italics_ sparingly for emphasis
- `Code formatting` for technical terms, API endpoints, and values
- > Blockquotes for notes, tips, and important callouts

### Code Examples

- Always provide context before code
- Use realistic examples from actual use cases
- Include comments for complex logic
- Show both minimal and complete examples

### Markdown Code Blocks in Documentation

When showing markdown examples to users, wrap in triple backticks:

````mdx
```markdown
# Example heading

- Example list
```
````

## Language and Localization

### File Organization

- English: `/src/content/docs/[section]/[page].mdx`
- Thai: Use `th/` prefix in URLs (configured in sidebar routing)
- Translations: `/src/content/i18n/[lang].json`

### Translation Notes

- Keep technical terms in English when they're industry standard
- Translate UI labels and descriptions
- Maintain consistent terminology across languages

## Common Patterns

### Opening Hooks

- "Ready to [action]?"
- "Have [problem]? You can [solution]"
- "[Product/Feature] is [value proposition]"
- "Need to [goal]? [Feature] lets you..."

### Section Transitions

- Use `---` horizontal rules between major sections
- Add brief context after images before diving into details

### Examples Section

Always include:

- Simple example first
- Real-world complex example second
- Complete working code/content
- Expected output or result

### Tips and Notes

Use blockquotes for:

- `> **Note:**` - Additional information
- `> **Tip:**` - Best practice advice
- `> **Important:**` - Critical warnings
- `> [Quote without prefix]` - Emphasized statements

## Quality Checklist

Before submitting documentation:

- [ ] Frontmatter includes title and description
- [ ] Opening paragraph hooks the reader
- [ ] Screenshots have descriptive alt text
- [ ] Code examples are complete and tested
- [ ] Emojis enhance readability without overdoing it
- [ ] Steps are numbered and sequential
- [ ] Technical terms are explained or linked
- [ ] Real-world examples are provided
- [ ] Tone matches section guidelines
- [ ] Internal links use relative paths
- [ ] No broken links or missing images
- [ ] Consistent heading hierarchy
- [ ] Grammar and spelling checked

## File Naming Conventions

- Use kebab-case for filenames: `add-knowledge.mdx`, `first-droid.mdx`
- Asset folders match content folders: `/assets/getting_start/`, `/assets/faq/`
- Images use descriptive names: `product_edit.jpg`, `1-all-droids.png`

## Responsive to User Feedback

When a user reports issues or asks questions about documentation:

1. **Acknowledge** the pain point
2. **Clarify** with concrete examples
3. **Update** documentation to prevent future confusion
4. **Link** to related documentation when relevant

## Examples of Good Documentation

Reference these pages as models:

- **Getting Started:** `first-droid.mdx` - Perfect step-by-step onboarding
- **Tuning:** `add-knowledge.mdx` - Excellent field documentation
- **Tuning:** `add-product.mdx` - Comprehensive examples and tips
- **FAQ:** `define-forbidden.mdx` - Good use of real-world scenarios
- **API:** `endpoint.mdx` - Clear technical documentation

## Anti-Patterns to Avoid

❌ Don't:

- Write walls of text without breaks
- Use technical jargon without explanation
- Show incomplete code examples
- Skip screenshots for complex UI
- Use passive voice excessively
- Create generic examples (use realistic business scenarios)
- Forget to explain WHY before HOW
- Overuse emojis (1-2 per section max)
- Write robot-like corporate speak
- Assume users know DealDroid terminology

✅ Do:

- Break content into scannable chunks
- Explain concepts in plain language
- Provide complete, working examples
- Show every important UI step
- Use active voice
- Use real pet store/business examples
- Explain value before diving into details
- Use emojis strategically for visual hierarchy
- Write conversationally
- Define terms on first use

## Updating Existing Documentation

When editing existing docs:

1. **Maintain the established pattern** for that section
2. **Keep the same tone** as surrounding content
3. **Update screenshots** if UI has changed
4. **Check all links** still work
5. **Preserve examples** unless they're outdated
6. **Match emoji usage** with the rest of the page

## Need Help?

When uncertain about documentation decisions:

1. Look at similar pages in the same section
2. Follow the pattern that matches the content type
3. Prioritize user clarity over brevity
4. When in doubt, add an example
