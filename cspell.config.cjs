/** @type {import('cspell').TraceOptions} */
module.exports = {
  allowCompoundWords: true,
  caseSensitive: false,
  ignoreRegExpList: ["/[\\u0E00-\\u0E7F]/g"], // Thai characters
  words: [
    "axios",
    "unpatchable",
    "Indo",
    "Bokmål",
    "Occitan",
    "Luxembourgish",
    "Asturian",
    "Chhattisgarhi",
    "Awadhi",
    "Maithili",
    "Bhojpuri",
    "Tosk",
    "Dari",
    "Magahi",
    "Sino",
    "Najdi",
    "Ta'izzi",
    "Adeni",
    "Minangkabau",
    "Pangasinan",
    "Iloko",
    "Waray",
    "Kadai",
    "Kabuverdianu",
    "Pisin",
    "seti",
    "xaugxgesi",
    "retokenization",
    "Heyyyyyy",
    "ddtp",
    "Kasikorn",
    "markdownify",
    "astrojs",
  ],

  ignoreWords: ["elif", "vtbot"],
  /**
   ** List of words to always be considered incorrect.
   */
  flagWords: [],
  ignorePaths: ["package.json", "pnpm-lock.yaml"],
};
