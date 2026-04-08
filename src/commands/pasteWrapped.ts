import { Editor, Notice, Plugin } from 'obsidian';

const LINE_BREAK_PATTERN = /[ \t]*[\r\n]+[ \t]*/g;

export function registerPasteWrappedCommand(plugin: Plugin): void {
	plugin.addCommand({
		id: 'paste-wrapped',
		name: 'Paste wrapped',
		editorCallback: async (editor: Editor) => {
			await pasteWrapped(editor);
		}
	});
}

async function pasteWrapped(editor: Editor): Promise<void> {
	try {
		const clipboardText = await navigator.clipboard.readText();

		if (!clipboardText) {
			new Notice('Clipboard is empty.');
			return;
		}

		editor.replaceSelection(unwrapClipboardText(clipboardText));
	} catch (error) {
		console.error('Failed to read clipboard for paste-wrapped command.', error);
		new Notice('Unable to read the clipboard.');
	}
}

export function unwrapClipboardText(text: string): string {
	return text.replace(LINE_BREAK_PATTERN, ' ');
}