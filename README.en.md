# Bonfire

An independent reading and writing theme for Obsidian, using the native app layout, Alan Darfin's snippet palette, and the typography from the [Bonfire blog](https://alanddarfin.blogspot.com/).

[Leia em português](README.md)

## Install

1. Create `.obsidian/themes/Bonfire/` in your vault, or use the vault's configured settings directory.
2. Copy [theme.css](theme.css) and [manifest.json](manifest.json) into that folder.
3. Open **Settings → Appearance → Themes** and select **Bonfire**.

Bonfire requires Obsidian 1.11.3 or later. [Basic](https://github.com/AlanDarfin/Basic-AI-Tools-For-Writers) is optional and has its own version requirements.

## Writing setup

Bonfire pairs dark burgundy with rose accents, plus a light paper option. It embeds Coming Soon for note headings, Schoolbell for labels and the Basic homepage title, and Copse for Reading view prose. Mobile settings, reading, and the Basic homepage reserve scroll space for system navigation and floating controls.

The adapted **Basic-Compat-Unificado-v2** styles are built in. Disable the old snippet when using Bonfire. The theme keeps drop caps, borderless tables, image placement, and an optional literary reading layout while preserving explicit Basic alignment. Use `bonfire-columns` on a note for paired dividers and desktop reading columns.

Add `bonfire-manuscript` to a note's `cssclasses` to enable serif prose, generous line spacing, and scene dividers. Use the `[!scene]`, `[!character]`, and `[!revision]` callouts when planning a draft. See the [sample chapter](examples/Capitulo.md).

[Style Settings](https://github.com/mgmeyers/obsidian-style-settings) provides a single **Bonfire** section for typography, decorative corners, desktop header height, and optional active-tab ink. Note classes include `bonfire-wide`, `bonfire-quiet` for narrower prose, `bonfire-image-grid`, `bonfire-tables` for striped tables, `bonfire-labels` for tag pills, and `bonfire-task-cards` for handwritten status marks. Use `[!letter]`, `[!clue]`, and `[!draft]` for story material.

## Contribute

Run `npm run build` with Node.js 22 or later to regenerate `theme.css`. Run `npm run check` to check the CSS artifact, version metadata, and palette contrast. See the [Portuguese README](README.md#créditos-e-licença) for upstream and font licensing.
