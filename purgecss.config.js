module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/css/*.css"],
  output: "_site/assets/css/",
  skippedContentGlobs: ["_site/assets/**/*.html"],

  // Preserve selectors that PurgeCSS can't statically detect:
  // - Classes applied by runtime JS (theme toggle state via data-theme)
  // - Attribute selectors with dynamic values
  // - Custom navbar / post-switch classes it may over-prune
  // - Font Awesome icon glyphs (class-based ::before content)
  safelist: {
    standard: [
      "navbar-nav-center",
      "navbar-socials",
      "theme-switch",
      "theme-btn",
      "sep",
      "active",
      "post-lang-switch",
      "contact-card",
      "contact-body",
      "toggle-container",
    ],
    deep: [/^fa-/, /^data-theme/, /^data-theme-setting/, /^data-theme-choice/],
    greedy: [/^html\[data-theme/, /^\[data-theme/, /theme-btn/, /light-toggle/],
  },
};
