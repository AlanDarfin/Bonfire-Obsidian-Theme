import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/bonfire.css", import.meta.url), "utf8");
const luminance = (hex) => {
  if (!/^#[\da-f]{6}$/i.test(hex)) throw new Error("Expected a palette hex color, got " + hex);
  const rgb = hex.slice(1).match(/../g).map((channel) => {
    const value = parseInt(channel, 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
};

const textPairs = [
  ["ink", "canvas"], ["ink", "panel"], ["ink", "card"],
  ["ink", "selection"], ["ink", "story-surface"],
  ["muted", "panel"], ["muted", "card"], ["muted", "surface-raised"], ["muted", "selection"],
  ["dim", "canvas"], ["dim", "panel"],
  ["link", "canvas"], ["link", "card"], ["link", "selection"],
  ["on-accent", "action"], ["on-accent", "action-hover"],
  ["search-ink", "search-tint"], ["highlight-ink", "mark"],
];
const controlPairs = [
  ["control-border", "canvas"], ["control-border", "panel"],
  ["action", "canvas"], ["action", "panel"], ["action", "selection"],
];

for (const mode of ["dark", "light"]) {
  const block = new RegExp("^body\\.theme-" + mode + "\\s*\\{([^}]+)\\}", "m").exec(source)?.[1];
  if (!block) throw new Error("Bonfire color palette missing: " + mode);
  const palette = new Map([...block.matchAll(/--bonfire-([\w-]+):\s*([^;]+);/g)]
    .map((match) => [match[1], match[2].trim()]));
  const check = (pairs, minimum) => Math.min(...pairs.map(([foreground, background]) => {
    const a = luminance(palette.get(foreground));
    const b = luminance(palette.get(background));
    const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    if (ratio < minimum) throw new Error(mode + " " + foreground + " on " + background + ": " + ratio.toFixed(2) + ":1");
    return ratio;
  }));
  const text = check(textPairs, 4.5);
  const controls = check(controlPairs, 3);
  console.log(mode + ": " + text.toFixed(2) + ":1 minimum for text; " + controls.toFixed(2) + ":1 for control boundaries and focus.");
}
