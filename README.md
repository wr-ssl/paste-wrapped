# Paste Wrapped

Paste Wrapped is an Obsidian plugin that pastes clipboard text as a single line.

It is intended for text copied from PDFs, web pages, or other sources that hard-wrap paragraphs across multiple lines. The plugin reads the clipboard, collapses line breaks and surrounding whitespace into spaces, and inserts the result at the current editor selection.

## Command

- `Paste wrapped`: Insert clipboard text into the active editor with embedded line breaks removed.

## Usage

1. Copy text from another app.
2. In Obsidian, open the command palette.
3. Run `Paste wrapped`.

If the clipboard is empty or Obsidian cannot read it, the plugin shows a notice instead of changing the note.

## Keyboard shortcut

You can assign a hotkey to the command from Obsidian's hotkeys settings:

1. Open **Settings -> Hotkeys**.
2. Search for `Paste wrapped`.
3. Select the plus button next to the command.
4. Press the keyboard shortcut you want to use.

After that, you can run `Paste wrapped` directly from the keyboard without opening the command palette.

## Development

This plugin uses TypeScript and esbuild.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Run lint checks with:

```bash
npm run lint
```

## Install from GitHub

To install this plugin directly from the GitHub repository:

1. Clone this repository, or download and extract it from GitHub.
2. Run `npm install` in the project folder.
3. Run `npm run build` to generate the plugin files.
4. Copy `main.js`, `manifest.json`, and `styles.css` into your vault at `.obsidian/plugins/paste-wrapped/`.
5. Reload Obsidian and enable **Paste Wrapped** in **Settings -> Community plugins**.

## Manual installation

Copy these files into your vault at `.obsidian/plugins/paste-wrapped/`:

- `main.js`
- `manifest.json`
- `styles.css`

Then reload Obsidian and enable **Paste Wrapped** in **Settings -> Community plugins**.
