import { Plugin } from 'obsidian';
import { registerPasteWrappedCommand } from './commands/pasteWrapped';

export default class MyPlugin extends Plugin {
	async onload() {
		registerPasteWrappedCommand(this);
	}
}
