#!/usr/bin/env node

/**
 * DealDroid Documentation Translation Script
 *
 * This script automatically translates English MDX documentation files to Thai
 * using Claude API while preserving:
 * - Frontmatter structure
 * - Image paths (@/assets/...)
 * - Code blocks
 * - Component imports
 * - Markdown formatting
 *
 * Usage: node translate-docs.js
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import Anthropic from "@anthropic-ai/sdk";

// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // Set this in your environment
});

// Files to translate (already completed ones are commented out)
const FILES_TO_TRANSLATE = [
  // Getting Started (remaining)
  {
    from: "getting-started/facebook.mdx",
    to: "th/getting-started/facebook.mdx",
  },

  // Tuning
  { from: "tuning/add-intent.mdx", to: "th/tuning/add-intent.mdx" },
  { from: "tuning/add-knowledge.mdx", to: "th/tuning/add-knowledge.mdx" },
  { from: "tuning/add-product.mdx", to: "th/tuning/add-product.mdx" },
  { from: "tuning/add-salescript.mdx", to: "th/tuning/add-salescript.mdx" },
  { from: "tuning/brand-voice.mdx", to: "th/tuning/brand-voice.mdx" },
  { from: "tuning/when-ai-think.mdx", to: "th/tuning/when-ai-think.mdx" },

  // FAQ
  { from: "faq/define-forbidden.mdx", to: "th/faq/define-forbidden.mdx" },
  { from: "faq/increase-conversion.mdx", to: "th/faq/increase-conversion.mdx" },
  { from: "faq/language-support.mdx", to: "th/faq/language-support.mdx" },
  { from: "faq/supported-channels.mdx", to: "th/faq/supported-channels.mdx" },

  // Third-Party
  { from: "thirdparty/endpoint.mdx", to: "th/thirdparty/endpoint.mdx" },
  {
    from: "thirdparty/receiving-webhook.mdx",
    to: "th/thirdparty/receiving-webhook.mdx",
  },
];

const BASE_DIR = path.join(__dirname, "src/content/docs");

const TRANSLATION_PROMPT = `You are a professional Thai translator specializing in technical documentation for the DealDroid AI Sales Agent platform.

**Your Task:**
Translate the following English MDX documentation to Thai, following these strict rules:

**MUST PRESERVE (DO NOT TRANSLATE):**
1. Frontmatter YAML structure (only translate values of 'title', 'description', 'label')
2. All image paths: @/assets/... (keep exactly as is)
3. Component imports: import { ... } from "..." (keep exactly as is)
4. Code blocks and their content (keep as is)
5. Technical terms: DealDroid, Droid, Intent, Webhook, API, OAuth, etc.
6. Markdown formatting: **, __, \`\`, etc.
7. Emoji symbols
8. HTML/JSX tags and components like <Card>, <Aside>, etc.

**MUST TRANSLATE:**
1. All human-readable text content
2. Headings (##, ###)
3. List items
4. Blockquote content (>)
5. Table content
6. Alt text in images
7. Button/UI element names (but keep in English if they appear in the actual UI)

**STYLE GUIDELINES:**
- Use friendly, conversational Thai (ใช้ภาษาไทยเป็นกันเอง สบายๆ)
- Keep the same tone as the English version
- Use "คุณ" for "you"
- Use "เรา" for "we" when referring to DealDroid team
- Preserve all emojis in their original positions
- Keep technical accuracy

**EXAMPLE:**
Input:
\`\`\`markdown
---
title: Connect LINE
description: Step-by-step guide
---

Ready to connect your LINE OA?

## Why Connect LINE?

- 💬 **Respond 24/7** — Your AI handles messages
\`\`\`

Output:
\`\`\`markdown
---
title: เชื่อมต่อ LINE
description: คู่มือแบบทีละขั้นตอน
---

พร้อมเชื่อมต่อ LINE OA ของคุณแล้วหรือยัง?

## ทำไมต้องเชื่อมต่อ LINE?

- 💬 **ตอบกลับตลอด 24/7** — AI ของคุณจัดการข้อความ
\`\`\`

Now translate this document:`;

async function translateFile(content) {
  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 8000,
      temperature: 0.3,
      messages: [
        {
          role: "user",
          content: `${TRANSLATION_PROMPT}\n\n${content}`,
        },
      ],
    });

    return message.content[0].text;
  } catch (error) {
    console.error("Translation error:", error.message);
    throw error;
  }
}

async function processFile(fileInfo) {
  const fromPath = path.join(BASE_DIR, fileInfo.from);
  const toPath = path.join(BASE_DIR, fileInfo.to);

  console.log(`\n📄 Processing: ${fileInfo.from}`);
  console.log(`   → ${fileInfo.to}`);

  try {
    // Read source file
    const content = await fs.readFile(fromPath, "utf-8");
    console.log(`   ✓ Read source file (${content.length} chars)`);

    // Translate
    console.log(`   ⏳ Translating...`);
    const translated = await translateFile(content);
    console.log(`   ✓ Translation complete (${translated.length} chars)`);

    // Write to destination
    await fs.writeFile(toPath, translated, "utf-8");
    console.log(`   ✅ Written to ${fileInfo.to}`);

    return { success: true, file: fileInfo.from };
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return { success: false, file: fileInfo.from, error: error.message };
  }
}

async function main() {
  console.log("🚀 DealDroid Documentation Translation Script");
  console.log("=".repeat(60));
  console.log(`📝 Files to translate: ${FILES_TO_TRANSLATE.length}`);
  console.log("=".repeat(60));

  // Check API key
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error(
      "\n❌ Error: ANTHROPIC_API_KEY environment variable not set!"
    );
    console.log("\nPlease set it with:");
    console.log('export ANTHROPIC_API_KEY="your-api-key-here"\n');
    process.exit(1);
  }

  const results = [];

  // Process files sequentially to avoid rate limits
  for (const fileInfo of FILES_TO_TRANSLATE) {
    const result = await processFile(fileInfo);
    results.push(result);

    // Add delay between requests to be respectful to API
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("📊 TRANSLATION SUMMARY");
  console.log("=".repeat(60));

  const successful = results.filter((r) => r.success).length;
  const failed = results.filter((r) => !r.success).length;

  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);

  if (failed > 0) {
    console.log("\n❌ Failed files:");
    results
      .filter((r) => !r.success)
      .forEach((r) => {
        console.log(`   - ${r.file}: ${r.error}`);
      });
  }

  console.log("\n✨ Translation complete!");
  console.log("\nNext steps:");
  console.log("1. Review the translated files in src/content/docs/th/");
  console.log("2. Run: npm run dev");
  console.log("3. Visit: http://localhost:4321/th/");
  console.log("4. Check for any formatting issues or mistranslations\n");
}

main().catch(console.error);
