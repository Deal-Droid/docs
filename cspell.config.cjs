/** @type {import('cspell').TraceOptions} */
module.exports = {
  allowCompoundWords: true,
  caseSensitive: false,
  ignoreRegExpList: ["/[\\u0E00-\\u0E7F]/g"], // Thai characters
  words: ["axios", "unpatchable"],

  ignoreWords: ["elif"],
  /**
   ** List of words to always be considered incorrect.
   */
  flagWords: [],
  ignorePaths: ["AGENTS.md", "package.json", "pnpm-lock.yaml"],
};
