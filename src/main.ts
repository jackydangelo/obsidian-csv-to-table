import { Plugin, Editor, Notice } from 'obsidian';

export default class CsvToTablePlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'convert-csv-to-md-table',
			name: 'Convert CSV selection to Markdown table',
			editorCallback: (editor: Editor) => {
				if (!editor.somethingSelected()) {
					new Notice('Select some CSV text first.');
					return;
				}

				const source = editor.getSelection();
				const table = this.csvToMarkdownTable(source);

				if (!table) {
					new Notice('Selection is not valid CSV.');
					return;
				}

				editor.replaceSelection(table);
			}
		});
	}

private csvToMarkdownTable(input: string): string | null {
	const lines = input
		.split('\n')
		.map(l => l.trim())
		.filter(l => l.length > 0);

	if (lines.length === 0) return null;

	const rows = lines.map(line => {
		const cells = line.split(',').map(c => c.trim());
		if (cells.length > 1 && cells[cells.length - 1] === '') {
			cells.pop();
		}
		return cells;
	});

	const colCount = Math.max(...rows.map(r => r.length));
	const pad = (r: string[]) => {
		const copy = [...r];
		while (copy.length < colCount) copy.push('');
		return copy;
	};

	const [header, ...body] = rows.map(pad);

	if (!header) return null;

	const headerLine = `| ${header.join(' | ')} |`;
	const separatorLine = `| ${header.map(() => '---').join(' | ')} |`;
	const bodyLines = body.map(r => `| ${r.join(' | ')} |`);

	return [headerLine, separatorLine, ...bodyLines].join('\n');
	}
}