# AGENTS.md

## What this plugin does

Csv to table converts a selected block of simple CSV text into a Markdown table, replacing the selection in place. Nothing else.

## Design philosophy — read this before suggesting changes

This plugin is deliberately minimal and single-purpose. It does **one thing**: select CSV text, run one command, get a Markdown table. That's the entire feature set, by design — not because of missing time or effort.

When working on this codebase (or suggesting improvements), please respect these constraints:

- **No ribbon icons.** Commands only live in the command palette.
- **No settings tab.** No configuration, no `data.json`, no persisted state.
- **No visual editor.** No popover, no modal, no dedicated view/pane.
- **No RFC 4180 / quoted-field CSV parsing.** Input is expected to be simple comma-separated text, optionally with a trailing comma on each line except possibly the last. A naive `split(',')` is intentional, not a shortcut to fix.
- **Selection is mandatory.** If nothing is selected, the plugin shows a `Notice` and does nothing — it never falls back to operating on the whole file.
- **One command, one file.** Prefer keeping all logic in `main.ts` unless complexity genuinely requires splitting it out.

## What NOT to add

Do not propose or implement, even if technically straightforward:
- Ribbon icons or status bar items
- A settings tab or any configurable options
- Excel/Google Sheets paste detection
- Quoted-field / escaped-comma CSV parsing
- A visual table editor (row/column operations, sorting, justification)
- Auto-run on paste or any other implicit trigger

If a request would move the plugin toward being a general-purpose table editor, it belongs in a different plugin — this one stays intentionally small.

## Codebase structure

- `main.ts` — the entire plugin: one command, one parsing function, one Markdown table formatter.
- `manifest.json` / `versions.json` — standard Obsidian plugin metadata, kept in sync with the build script.
- `eslint.config.mts` — lints against official Obsidian community plugin guidelines via `eslint-plugin-obsidianmd`.

## Build & workflow

- `npm install`
- `npm run dev` — esbuild watch mode
- `npm run build` — production build (runs `tsc` type check + minified esbuild)
- `npm run lint` — ESLint against Obsidian guidelines

Standard Obsidian community plugin template structure (`obsidianmd/obsidian-sample-plugin`), TypeScript, esbuild bundler, no local Node.js assumptions beyond the toolchain already configured in this repo.
