/**
 * Typography configuration per UXDS-1.
 *
 * Headings: Satoshi (fallback Inter / system-ui)
 * Body: Inter (fallback system-ui)
 * Monospace: JetBrains Mono (fallback Fira Code / monospace)
 *
 * Note: Satoshi is a commercial font not available on Google Fonts.
 * We use Inter as a high-quality fallback for headings until the
 * Satoshi font files are provisioned.
 *
 * Fonts are loaded via CSS @import in globals.css to avoid
 * the memory overhead of next/font/google during static build.
 */

/**
 * CSS variables consumed by tailwind.config.js fontFamily.
 * These reference font stacks defined in globals.css.
 */
export const fontVariables = 'font-heading-stack font-body-stack font-mono-stack';
