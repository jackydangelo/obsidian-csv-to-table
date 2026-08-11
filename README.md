A simple Obsidian plugin that converts selected CSV-like text into a Markdown table.

## Usage
- Select text where each line is comma-separated values
- Open the command palette (Ctrl/Cmd + P)
- Run "CSV to table: Convert CSV selection to Markdown table"

## Example
Given this selection:
```text
fruit,color
apple,red
banana,yellow
```

Converts into:
| fruit | color |
| --- | --- |
| apple | red |
| banana | yellow |

## Inspired by
- kepano's [List to table](https://github.com/kepano/list-to-table) — works on lists, not comma-separated text
- ganesshkumar's [Markdown table editor](https://github.com/ganesshkumar/obsidian-table-editor) — full visual table editor with CSV import among many features, unmaintained for a few years
- ganesshkumar's [Excel to Markdown table](https://github.com/ganesshkumar/obsidian-excel-to-markdown-table) — converts pasted CSV/Excel data on paste, but doesn't offer a standalone command to convert an existing selection
