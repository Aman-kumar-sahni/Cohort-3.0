---
name: Soft Light Professional
colors:
  surface: '#fcf8ff'
  surface-dim: '#dbd8e4'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2fe'
  surface-container: '#efecf8'
  surface-container-high: '#e9e6f3'
  surface-container-highest: '#e4e1ed'
  on-surface: '#1b1b23'
  on-surface-variant: '#464554'
  inverse-surface: '#303038'
  inverse-on-surface: '#f2effb'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#904900'
  on-tertiary: '#ffffff'
  tertiary-container: '#b55d00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#fcf8ff'
  on-background: '#1b1b23'
  surface-variant: '#e4e1ed'
typography:
  h1:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
---

## Brand & Style

This design system is built on the principles of **Modern Soft Minimalism**. It is engineered for high-productivity SaaS environments where visual noise must be minimized to allow for deep focus. The aesthetic prioritizes legibility, breathability, and a sense of calm reliability. 

By leveraging a "Soft Light" approach, the interface avoids the harshness of pure black-on-white high contrast, instead using a sophisticated palette of warm whites and cool slates. The emotional response is intended to be professional, organized, and frictionless—evoking the feeling of a well-ordered, physical workspace bathed in natural light.

## Colors

The color strategy revolves around a foundational neutral base of **Warm White (#F8FAFC)** for backgrounds, providing a soft canvas that reduces eye strain. **Pure White (#FFFFFF)** is reserved for elevated surfaces and interactive containers to create clear focal points.

- **Primary Accent:** Soft Indigo (#6366F1) serves as the singular "action" color, used for primary buttons, active states, and critical indicators.
- **Neutrals:** Dark Slate (#1E293B) provides high-readability for headlines, while Cool Grey (#64748B) softens secondary information.
- **Semantic Colors:** We use desaturated "Sage Green" for success states, "Soft Amber" for warnings, and a muted "Rose" for errors to maintain the professional, low-vibrancy aesthetic while ensuring functional clarity.

## Typography

This design system utilizes **Inter** exclusively to lean into its utilitarian, highly-legible characteristics. 

Headings use **Dark Slate (#1E293B)** with tighter letter-spacing and heavier weights to provide structural anchors. Body text uses **Cool Grey (#64748B)** with generous line-height (1.6) to improve reading stamina across data-heavy dashboards. Small labels and captions may utilize semi-bold weights or slight uppercase styling to differentiate them from functional body text without requiring additional colors.

## Layout & Spacing

The design system follows a strict **8px linear scale**, ensuring consistent vertical and horizontal rhythm. 

The layout philosophy uses a **fixed-fluid hybrid grid**:
- **Dashboards:** Use a fluid 12-column grid with 24px (lg) gutters to maximize screen real estate for data.
- **Content Pages:** Use a centered fixed-width container (max-width: 1280px) to maintain optimal line lengths for reading.
- **Margins:** Standard page margins are set to 32px (xl) on desktop and 16px (md) on mobile to ensure content does not feel cramped.

## Elevation & Depth

Depth is conveyed through a combination of **low-contrast outlines** and **ambient shadows**. This system avoids heavy shadows to maintain the "light" aesthetic.

- **Level 0 (Base):** Background (#F8FAFC).
- **Level 1 (Surfaces):** White (#FFFFFF) cards with a 1px border (#E2E8F0).
- **Level 2 (Interactive/Floating):** White cards with a subtle drop shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`.
- **Level 3 (Overlays/Modals):** Significant diffusion: `0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)`.

Borders are the primary method of separation; shadows are used only to denote temporary elevation or "float."

## Shapes

The design system adopts a **"Rounded" (12px)** signature. This specific radius (0.75rem) provides a soft, approachable feel that contrasts with the technical nature of SaaS tools.

- **Standard Elements:** 12px rounding for cards, input fields, and large buttons.
- **Small Elements:** 8px rounding for smaller components like chips or tags.
- **Inner Padding:** Ensure nested elements have a smaller radius (usually 4px or 8px) to maintain visual harmony with the outer 12px container.

## Components

- **Buttons:** Primary buttons use a solid Soft Indigo fill with white text. Secondary buttons use a white background with a 1px border (#E2E8F0) and slate text. Hover states involve a subtle darken of the background or a very light Indigo tint for secondary actions.
- **Input Fields:** 1px border (#E2E8F0) with a 12px radius. On focus, the border transitions to Soft Indigo with a 2px outer glow (ring) of 10% opacity Indigo.
- **Cards:** Pure white background, 12px radius, 1px border (#E2E8F0). Padding should be at least 24px (lg) to ensure the "Soft Light" breathing room.
- **Chips/Badges:** High-contrast labels with very light background tints (e.g., Success badge: 10% Sage Green background with Sage Green text).
- **Lists:** Rows separated by thin 1px horizontal borders (#E2E8F0). Hover states on list items use the Background color (#F8FAFC) to indicate interactivity.
- **Checkboxes/Radios:** Use the Soft Indigo for checked states with a subtle 2px rounding even on checkboxes to match the 12px system-wide theme.