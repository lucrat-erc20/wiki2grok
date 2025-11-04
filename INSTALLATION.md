# Installation Guide

## Quick Install (Chrome Web Store)

**Coming Soon**: Once published, simply visit the Chrome Web Store and click "Add to Chrome"

## Manual Installation

### Step 1: Download the Extension

Download the latest release ZIP from GitHub:

**[⬇️ Download wiki2grok-v1.0.1.zip](https://github.com/lucrat-erc20/wiki2grok/releases/download/v1.0.1/wiki2grok-v1.0.1.zip)**

Or visit the [Releases page](https://github.com/lucrat-erc20/wiki2grok/releases) to see all versions.

### Step 2: Extract Files

Extract the ZIP file to a folder on your computer. You should see these files:
```
wikipedia-to-grokipedia/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── background.js
├── icon16.png
├── icon48.png
├── icon128.png
├── README.md
├── PRIVACY_POLICY.md
└── INSTALLATION.md
```

### Step 3: Open Chrome Extensions Page

1. Open Google Chrome
2. Type `chrome://extensions/` in the address bar and press Enter
3. Or click the three dots menu → More Tools → Extensions

### Step 4: Enable Developer Mode

1. Look for the "Developer mode" toggle in the top-right corner
2. Click it to turn it ON

### Step 5: Load the Extension

1. Click the "Load unpacked" button that appears
2. Navigate to and select the folder containing the extracted files
3. Click "Select Folder" (or "Open" on Mac)

### Step 6: Verify Installation

1. You should see "Wiki2Grok" appear in your extensions list
2. The extension icon should appear in your Chrome toolbar
3. If you don't see the icon, click the puzzle piece icon and pin the extension

### Step 7: Test It Out

1. Visit any Wikipedia page (e.g., `https://en.wikipedia.org/wiki/Chrome_extension`)
2. A popup should automatically appear
3. Click the extension icon to access settings

## Troubleshooting

### Extension doesn't appear after loading
- Make sure you selected the correct folder containing `manifest.json`
- Try refreshing the extensions page
- Check the "Errors" button for any error messages

### Popup doesn't appear on Wikipedia
- Refresh the Wikipedia page after installing
- Check that Developer Mode is still enabled
- Verify the extension is enabled (toggle should be blue/on)

### "Manifest file is missing or unreadable" error
- Ensure `manifest.json` is in the root of the selected folder
- Check that the file isn't corrupted
- Re-extract the ZIP file

### Changes not taking effect
- Click the refresh icon (circular arrow) on the extension card
- Close and reopen any Wikipedia tabs

## Updating the Extension

### If installed manually:
1. Download the new version
2. Extract to the same folder (or a new one)
3. Go to `chrome://extensions/`
4. Click the refresh icon on the extension card

### If installed from Chrome Web Store:
- Updates happen automatically

## Uninstalling

1. Go to `chrome://extensions/`
2. Find "Wiki2Grok"
3. Click "Remove"
4. Confirm the removal

All settings and data will be automatically deleted.

## Need Help?

If you encounter any issues not covered here, please:
- Check the main [README.md](README.md) file
- Visit [GitHub Issues](https://github.com/lucrat-erc20/wiki2grok/issues)
- Check Chrome's extension error console (click "Errors" button)
- View your browser console (F12) while on a Wikipedia page