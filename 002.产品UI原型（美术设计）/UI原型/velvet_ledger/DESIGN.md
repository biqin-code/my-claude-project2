---
name: Velvet Ledger
colors:
  surface: '#fff8f8'
  surface-dim: '#fbcee4'
  surface-bright: '#fff8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f5'
  surface-container: '#ffe8f1'
  surface-container-high: '#ffe0ee'
  surface-container-highest: '#ffd8eb'
  on-surface: '#2d1323'
  on-surface-variant: '#4b454a'
  inverse-surface: '#442738'
  inverse-on-surface: '#ffecf3'
  outline: '#7c757a'
  outline-variant: '#cdc4ca'
  surface-tint: '#685a67'
  primary: '#685a67'
  on-primary: '#ffffff'
  primary-container: '#f9e6f6'
  on-primary-container: '#746673'
  inverse-primary: '#d3c1d1'
  secondary: '#75546e'
  on-secondary: '#ffffff'
  secondary-container: '#fed3f3'
  on-secondary-container: '#795873'
  tertiary: '#78517c'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffe3fd'
  on-tertiary-container: '#845c88'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f0dded'
  primary-fixed-dim: '#d3c1d1'
  on-primary-fixed: '#221823'
  on-primary-fixed-variant: '#4f434f'
  secondary-fixed: '#ffd7f4'
  secondary-fixed-dim: '#e3bad9'
  on-secondary-fixed: '#2c1229'
  on-secondary-fixed-variant: '#5b3d56'
  tertiary-fixed: '#ffd6ff'
  tertiary-fixed-dim: '#e7b7e9'
  on-tertiary-fixed: '#2e0d34'
  on-tertiary-fixed-variant: '#5e3963'
  background: '#fff8f8'
  on-background: '#2d1323'
  surface-variant: '#ffd8eb'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  numeral-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 20px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 40px
---

## Brand & Style

The design system embodies a **"Twilight Bloom"** aesthetic, specifically tailored for a personal finance manager. The brand personality is sophisticated, calming, and restorative, aiming to transform financial management from a cold chore into a mindful, rhythmic ritual through a soft, muted, and organic visual language.

### Design Style: Ethereal Minimalism
This system utilizes a mix of **Minimalism** and **Soft-Focus Layering**. By combining generous whitespace with an analogous palette of orchids, lilies, and soft mauves, the UI feels grounded yet premium.

- **Softness & Depth:** Finance data is presented on "velvet-touch" cards with rounded corners.
- **Visual Serenity:** High use of light, airy backgrounds to create a "sanctuary" for data.
- **Atmospheric Perspective:** Instead of heavy shadows, depth is achieved through subtle tonal shifts and soft glows, mimicking the gentle transition of light at dusk.

## Colors

The palette is inspired by twilight horizons and blooming flora to evoke a sense of maturity and restorative peace. The palette has moved toward a more monochromatic, high-key range of pinks, lavenders, and mauves to maximize the luminous, airy feel of the interface.

- **Primary (Pale Orchid):** A very light, airy tint used for backgrounds and soft highlights. It provides the foundational "glow."
- **Secondary (Soft Petal):** A mid-toned pink used for interactive elements and brand accents, offering gentle contrast.
- **Tertiary (Dusty Lilac):** Used for accenting specific data visualizations or secondary interactive states, maintaining the floral theme.
- **Neutral (Soft Mauve):** A warm, pink-tinted neutral used for subtle borders and secondary text to maintain a soft temperature across the UI.
- **Functional Colors:** 
    - **Muted Coral:** For overspending or errors.
    - **Soft Plum:** Used for positive growth indicators, ensuring even success feels integrated into the orchid theme.
    - **Petal White:** The cleanest background tint for high-level surfaces.

## Typography

The system uses **Hanken Grotesk** across all levels. Its balanced, contemporary geometry provides a clean structure that contrasts beautifully with the soft color palette.

- **Numerals:** Financial data is the priority. Use `numeral-xl` for main balances and `headline-lg` for large currency displays to give them a confident, architectural presence.
- **Hierarchy:** Clear distinction between headers and body text is maintained through weight rather than just size.
- **Labels:** Use uppercase for `label-md` with slight letter spacing for meta-data like "DATE" or "CATEGORY" to provide a modern, systematic feel.

## Layout & Spacing

The layout follows a **fluid grid** model with a focus on generous internal padding to maintain the "restorative" feel.

- **Grid:** A 4-column grid for mobile and 12-column for desktop/tablet.
- **Rhythm:** An 8px base unit drives all spacing. 
- **Margins:** Page margins are generous (20px+) to ensure content never feels cramped against the screen edges.
- **Grouping:** Use the `stack` tokens to define vertical relationships. Elements within a card use `stack-sm`, while cards themselves are separated by `stack-md`.

## Elevation & Depth

Hierarchy is established using **Tonal Layers** and **Atmospheric Shadows** rather than traditional high-contrast dropshadows.

- **Base Layer:** The `Petal White` canvas.
- **Surface Layer:** White cards with a very soft, wide-dispersion shadow tinted with the secondary petal color (`rgba(243, 201, 232, 0.15)`).
- **Glass Overlay:** Modals and bottom sheets use a backdrop blur (12px to 20px) with a semi-transparent white fill. This creates the effect of a "soft mist" over the data.
- **Borders:** Use 1px solid borders in a very light tint of the neutral mauve to define shapes with precision without breaking the high-key aesthetic.

## Shapes

The shape language is **Rounded**, reflecting organic forms found in nature, like river stones or smooth petals.

- **Cards:** Use `rounded-lg` (16px) to house spending lists and charts, creating a friendly, non-threatening enclosure.
- **Interactive Elements:** Buttons use `rounded-xl` (24px) or full pill shapes for a friendly, ergonomic feel.
- **Input Fields:** Use `rounded-lg` (8px) to provide enough structure for data entry while remaining soft.

## Components

### Buttons
- **Primary:** High-contrast fill using the `Secondary` (Soft Petal) color. White or deep mauve text. Soft atmospheric shadow.
- **Secondary:** Light fill using the `Primary` (Pale Orchid) color with `Secondary` color text.
- **Ghost:** No background, Secondary color text. Used for secondary actions like "Cancel."

### Cards
- **Velvet Cards:** Pure white background, `rounded-lg` corners, and a subtle secondary-tinted shadow. Used for transaction items and budget summaries.
- **Highlight Cards:** Soft `Tertiary` (Dusty Lilac) background with deep mauve text for important milestones.

### Input Fields & Keyboards
- **Amount Input:** Large `numeral-xl` font, centered, with no border, just a focus underline in the secondary petal color.
- **Custom Keyboard:** Flat design, no key borders. Keys are separated by whitespace. Tapping a key triggers a soft `Pale Orchid` pulse.

### Progress Bars (Budgeting)
- **Track:** Muted neutral-mauve.
- **Fill:** 
    - Normal: `Secondary Color` (Soft Petal).
    - 80% Threshold: `Tertiary Color` (Dusty Lilac).
    - 100%+ (Over): `Muted Coral`.

### Lists & Chips
- **Chips:** Used for categories. Pill-shaped with a `Primary` (Pale Orchid) background and `Secondary` (Soft Petal) text.
- **Transaction List:** High-contrast text for amounts. Negative values (outflow) use `Neutral Mauve`, positive values (inflow) use a more saturated `Secondary Petal`.