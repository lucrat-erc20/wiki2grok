# Wiki2Grok Chrome Extension

Automatically redirects Wikipedia pages to their Grokipedia equivalents. **For people who never want to see Wikipedia again.**

> **Disclaimer**: This extension is not affiliated with, endorsed by, or connected to Wikipedia, the Wikimedia Foundation, or Grokipedia. It is an independent tool created to help users navigate between these platforms.

## Features

- 🚀 **Automatic Detection**: Detects when you visit any Wikipedia page
- 🎯 **Smart Popup**: Shows a friendly popup asking if you want to view the page on Grokipedia
- ⚡ **Auto-Redirect Mode**: Optional setting to automatically redirect without asking
- 🎨 **Clean Interface**: Simple, non-intrusive design
- ⌨️ **Keyboard Shortcuts**: Press Escape to dismiss the popup

## Installation

### From Chrome Web Store (Recommended)
Coming soon! The extension is currently under review.

### Manual Installation (Available Now)
1. **[⬇️ Download wiki2grok-v1.0.1.zip](https://github.com/lucrat-erc20/wiki2grok/releases/download/v1.0.1/wiki2grok-v1.0.1.zip)**
2. Extract the ZIP to a folder on your computer
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" (toggle in top-right corner)
5. Click "Load unpacked"
6. Select the extracted folder
7. The extension is now installed!

For detailed instructions, see [INSTALLATION.md](INSTALLATION.md)

## Usage

### Default Mode (Popup)
1. Visit any Wikipedia page (e.g., `https://en.wikipedia.org/wiki/Euler_angles`)
2. A popup will automatically appear
3. Choose:
   - **Go to Grokipedia**: Opens the equivalent Grokipedia page
   - **Stay on Wikipedia**: Closes the popup and stays on Wikipedia

### Auto-Redirect Mode
1. Click the extension icon in your Chrome toolbar
2. Toggle "Auto-redirect" ON
3. Now all Wikipedia pages will automatically redirect to Grokipedia
4. Toggle OFF to return to popup mode

## How It Works

When you visit a Wikipedia page:
- The extension extracts the page name from the URL
- In **popup mode**: Shows a confirmation dialog
- In **auto-redirect mode**: Immediately redirects to `https://grokipedia.com/page/[PageName]`
- If the exact page doesn't exist on Grokipedia, their site handles the search/fallback

## Privacy

This extension:
- ✅ Only activates on Wikipedia pages
- ✅ Stores one setting locally (auto-redirect preference)
- ✅ Does not collect, transmit, or store any personal data
- ✅ Does not track your browsing history
- ✅ Does not require any external permissions beyond Wikipedia access

## Files Included

- `manifest.json` - Extension configuration
- `popup.html` - Settings interface
- `popup.js` - Settings logic
- `content.js` - Main redirect logic
- `background.js` - Service worker for initialization
- `icon16.png`, `icon48.png`, `icon128.png` - Extension icons

## Development

### Prerequisites
- Google Chrome or Chromium-based browser
- Basic knowledge of Chrome extensions (optional)

### Local Development
1. Clone or download this repository
2. Make your changes to the source files
3. Go to `chrome://extensions/`
4. Click the refresh icon on the extension card to reload changes

### Building for Distribution
1. Ensure all files are in a single folder
2. Zip all files together (not the folder, just the files)
3. The ZIP is ready for Chrome Web Store upload or sharing

## Support

If you encounter any issues:
1. Check the [Installation Guide](INSTALLATION.md)
2. Visit the [GitHub Issues](https://github.com/lucrat-erc20/wiki2grok/issues) page
3. Check that you're on a Wikipedia page (URL must contain `wikipedia.org/wiki/`)
4. Try disabling and re-enabling the extension
5. Check the Chrome console for error messages (F12 → Console tab)

## Repository

GitHub: [https://github.com/lucrat-erc20/wiki2grok](https://github.com/lucrat-erc20/wiki2grok)

## Contributing

Contributions are welcome! If you'd like to improve the extension:
1. Fork the repository at [github.com/lucrat-erc20/wiki2grok](https://github.com/lucrat-erc20/wiki2grok)
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License - Copyright (c) 2025 lucrat-erc20

See [LICENSE](LICENSE) file for full license text.

## Changelog

### Version 1.0.1 (Tabs fix)
- Automatic popup on Wikipedia pages
- Manual redirect option
- Auto-redirect setting
- Clean, modern UI
- Keyboard shortcuts (Escape to close)

## Credits

Created to provide quick access to Grokipedia content while browsing Wikipedia.

---

**Note**: This extension is not affiliated with, endorsed by, or connected to Wikipedia, the Wikimedia Foundation, or Grokipedia.