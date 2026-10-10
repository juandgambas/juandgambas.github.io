/**
 * The colour themes, single-sourced for the desktop swatch row and the
 * dropdown picker.
 *
 * All twelve palettes ship with the theme in `src/styles/themes/` and stay
 * imported in `src/styles/tokens/colors.css`, so every theme keeps working
 * even when it is hidden from the pickers (for example for a visitor who
 * saved it earlier). `showInSelector` curates what the pickers offer —
 * flip any theme to `false` to hide it from your own site's pickers.
 */
export interface ColourTheme {
  /** Matches the `html[data-theme="…"]` selector in src/styles/themes/. */
  id: string;
  /** Label shown in the pickers. */
  name: string;
  /** Swatch colour (the palette's brand-500). */
  color: string;
  /** Offer this theme in the pickers. The palette works either way. */
  showInSelector: boolean;
}

// All 12 themes in Tailwind color order.
export const colourThemes: ColourTheme[] = [
  { id: 'orange', name: 'Orange', color: 'oklch(70.5% 0.213 47.604)', showInSelector: true },
  { id: 'amber', name: 'Amber', color: 'oklch(76.9% 0.188 70.08)', showInSelector: true },
  { id: 'lime', name: 'Lime', color: 'oklch(76.8% 0.233 130.85)', showInSelector: true },
  { id: 'emerald', name: 'Emerald', color: 'oklch(69.6% 0.17 162.48)', showInSelector: true },
  { id: 'teal', name: 'Teal', color: 'oklch(70.4% 0.14 182.503)', showInSelector: true },
  { id: 'cyan', name: 'Cyan', color: 'oklch(71.5% 0.143 215.221)', showInSelector: true },
  { id: 'sky', name: 'Sky', color: 'oklch(68.5% 0.169 237.323)', showInSelector: true },
  { id: 'blue', name: 'Blue', color: 'oklch(62.3% 0.214 259.815)', showInSelector: true },
  { id: 'indigo', name: 'Indigo', color: 'oklch(58.5% 0.233 277.117)', showInSelector: true },
  { id: 'violet', name: 'Violet', color: 'oklch(60.6% 0.25 292.717)', showInSelector: true },
  { id: 'purple', name: 'Purple', color: 'oklch(62.7% 0.265 303.9)', showInSelector: true },
  { id: 'magenta', name: 'Magenta', color: 'oklch(58.8% 0.268 330)', showInSelector: true },
];

/** The themes the pickers actually offer. */
export const selectorThemes: ColourTheme[] = colourThemes.filter(
  (theme) => theme.showInSelector
);
