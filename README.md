A simple Obsidian plugin that converts selected csv like test into Markdown tables.

Inspired by 
- kepano's [List to table](https://github.com/kepano/list-to-table)
- ganesshkumar's [Markdown table editor](https://github.com/ganesshkumar/obsidian-table-editor) (with lots of features, resource-intensive, and no longer updated)


## Usage
- Select text containing a text separated by ","
- Open the command palette (Ctrl/Cmd + P)
- Run command "CSV to table: Convert CSV selection to Markdown table"

## Example
Given this selection:

```text
Fruit,color
apple,red
banana,yellow
```

Convert into a table:
| Fruit | Color |
| -------- | -------- |
| apple | red |
| banana | yellow |
