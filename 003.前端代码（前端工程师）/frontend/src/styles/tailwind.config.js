/**
 * Velvet Ledger - 共享 Tailwind 配置
 * 个人财务管家设计系统
 */

module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "secondary-fixed": "#ffd7f4",
        "on-primary-fixed": "#221823",
        "on-tertiary-container": "#845c88",
        "surface-container-lowest": "#ffffff",
        "on-error": "#ffffff",
        "tertiary-fixed": "#ffd6ff",
        "surface": "#fff8f8",
        "on-surface-variant": "#4b454a",
        "on-error-container": "#93000a",
        "primary-fixed": "#f0dded",
        "on-tertiary-fixed-variant": "#5e3963",
        "on-tertiary-fixed": "#2e0d34",
        "on-secondary-fixed-variant": "#5b3d56",
        "surface-tint": "#685a67",
        "on-secondary": "#ffffff",
        "on-primary-container": "#746673",
        "surface-container": "#ffe8f1",
        "inverse-surface": "#442738",
        "surface-dim": "#fbcee4",
        "background": "#fff8f8",
        "primary-fixed-dim": "#d3c1d1",
        "surface-variant": "#ffd8eb",
        "on-tertiary": "#ffffff",
        "outline": "#7c757a",
        "outline-variant": "#cdc4ca",
        "on-primary-fixed-variant": "#4f434f",
        "inverse-on-surface": "#ffecf3",
        "surface-container-low": "#fff0f5",
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "secondary": "#75546e",
        "error": "#ba1a1a",
        "surface-container-highest": "#ffd8eb",
        "surface-container-high": "#ffe0ee",
        "tertiary": "#78517c",
        "primary": "#685a67",
        "on-background": "#2d1323",
        "surface-bright": "#fff8f8",
        "primary-container": "#f9e6f6",
        "on-secondary-container": "#795873",
        "secondary-fixed-dim": "#e3bad9",
        "secondary-container": "#fed3f3",
        "tertiary-fixed-dim": "#e7b7e9",
        "tertiary-container": "#ffe3fd",
        "on-surface": "#2d1323",
        "on-secondary-fixed": "#2c1229",
        "inverse-primary": "#d3c1d1"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "container-padding": "20px",
        "base": "8px",
        "gutter": "16px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "40px"
      },
      "fontFamily": {
        "body-md": ["Hanken Grotesk"],
        "headline-md": ["Hanken Grotesk"],
        "headline-lg-mobile": ["Hanken Grotesk"],
        "numeral-xl": ["Hanken Grotesk"],
        "headline-lg": ["Hanken Grotesk"],
        "title-lg": ["Hanken Grotesk"],
        "label-md": ["Hanken Grotesk"],
        "body-lg": ["Hanken Grotesk"]
      },
      "fontSize": {
        "body-md": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "700"}],
        "numeral-xl": ["40px", {"lineHeight": "48px", "letterSpacing": "-0.03em", "fontWeight": "700"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "title-lg": ["20px", {"lineHeight": "28px", "fontWeight": "600"}],
        "label-md": ["12px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}]
      }
    },
  },
}