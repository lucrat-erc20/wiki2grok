# Packaging Guide for Distribution

## Files Checklist

Ensure you have all these files ready:

### Required Code Files
- ✅ `manifest.json`
- ✅ `popup.html`
- ✅ `popup.js`
- ✅ `content.js`
- ✅ `background.js`

### Required Icon Files
- ✅ `icon16.png` (16x16 pixels)
- ✅ `icon48.png` (48x48 pixels)
- ✅ `icon128.png` (128x128 pixels)

### Documentation Files (Optional but Recommended)
- ✅ `README.md`
- ✅ `PRIVACY_POLICY.md`
- ✅ `INSTALLATION.md`
- ✅ `LICENSE` (MIT License included)

## Creating the Distribution ZIP

### Method 1: Manual ZIP Creation

**Windows**:
1. Select all required files (NOT the folder)
2. Right-click → Send to → Compressed (zipped) folder
3. Name it `wiki2grok-v1.0.0.zip`

**Mac**:
1. Select all required files (NOT the folder)
2. Right-click → Compress [X] Items
3. Rename to `wiki2grok-v1.0.0.zip`

**Linux**:
```bash
zip -r wiki2grok-v1.0.0.zip manifest.json popup.html popup.js content.js background.js icon16.png icon48.png icon128.png
```

### Method 2: Command Line (All Platforms)

From inside your extension folder:

```bash
# Windows PowerShell
Compress-Archive -Path manifest.json,popup.html,popup.js,content.js,background.js,icon*.png -DestinationPath wiki2grok-v1.0.0.zip

# Mac/Linux
zip wiki2grok-v1.0.0.zip manifest.json popup.html popup.js content.js background.js icon*.png
```

## Important ZIP Requirements

⚠️ **Critical**: The ZIP must contain files at the root level, NOT in a subfolder!

**Correct structure**:
```
wiki2grok-v1.0.0.zip
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── background.js
├── icon16.png
├── icon48.png
└── icon128.png
```

**Incorrect structure** (will be rejected):
```
wiki2grok-v1.0.0.zip
└── wiki2grok/
    ├── manifest.json
    ├── popup.html
    └── ...
```

## Verification Steps

Before distributing, verify your ZIP:

1. **Extract the ZIP to a new folder**
2. **Check file structure**: `manifest.json` should be at the root
3. **Test installation**:
   - Go to `chrome://extensions/`
   - Enable Developer Mode
   - Click "Load unpacked"
   - Select the extracted folder
   - Verify it loads without errors
4. **Test functionality**:
   - Visit a Wikipedia page
   - Confirm popup appears
   - Test settings toggle
   - Test both redirect modes

## Distribution Options

### Option 1: Chrome Web Store (Recommended)

**Pros**:
- Automatic updates
- User trust
- Easy installation
- Version management

**Cons**:
- $5 registration fee
- Review process (1-7 days)
- Must comply with store policies

**Steps**:
1. Create developer account at [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Upload ZIP file
3. Complete store listing (see `STORE_LISTING.md`)
4. Submit for review

### Option 2: Direct Distribution

**Pros**:
- No fees
- Immediate availability
- Full control

**Cons**:
- Users must manually install
- No automatic updates
- Security warnings during install

**Steps**:
1. Upload ZIP to your website, GitHub releases, or Google Drive
2. Share download link with users
3. Provide installation instructions (see `INSTALLATION.md`)

### Option 3: Enterprise Distribution

For internal company use:
1. Host on internal server
2. Use Chrome Enterprise policies to auto-install
3. See [Chrome Enterprise documentation](https://support.google.com/chrome/a/answer/9296680)

## Version Numbering

Follow semantic versioning (MAJOR.MINOR.PATCH):

- `1.0.0` - Initial release
- `1.0.1` - Bug fix
- `1.1.0` - New feature
- `2.0.0` - Breaking change

Update version in `manifest.json` before each release.

## Creating a Release on GitHub

Since you're hosting on GitHub (https://github.com/lucrat-erc20/wiki2grok):

```bash
# Tag the release
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0

# Create release on GitHub
# 1. Go to https://github.com/lucrat-erc20/wiki2grok/releases
# 2. Click "Create a new release"
# 3. Choose the tag (v1.0.0)
# 4. Title: "v1.0.0 - Initial Release"
# 5. Add release notes (what's new, features, etc.)
# 6. Attach the ZIP file
# 7. Publish release
```

## Pre-Distribution Checklist

Before sharing your extension:

### Code Quality
- ✅ No console errors
- ✅ No hardcoded credentials
- ✅ All features tested
- ✅ Works on different Wikipedia pages
- ✅ Settings persist correctly
- ✅ No performance issues

### Documentation
- ✅ README is complete
- ✅ Privacy policy is accurate
- ✅ Installation instructions are clear
- ✅ License file included (if applicable)

### Legal
- ✅ Privacy policy reviewed
- ✅ No trademark violations
- ✅ MIT License included
- ✅ Proper attribution for any third-party code
- ✅ Complies with Chrome Web Store policies

### Icons
- ✅ Icons are clear at all sizes
- ✅ Icons are PNG format
- ✅ Icons have transparent background (if appropriate)

## Post-Distribution

### Monitor
- Check for user feedback
- Monitor extension error reports in Chrome Web Store
- Track installation issues

### Update Process
1. Make changes to code
2. Update version number in `manifest.json`
3. Test thoroughly
4. Create new ZIP
5. Upload to Chrome Web Store (auto-updates users)
6. Or share new ZIP for manual installations

## Security Best Practices

Before distributing:
- ✅ No `eval()` or inline scripts
- ✅ Minimal permissions requested
- ✅ No external script loading
- ✅ Content Security Policy defined
- ✅ HTTPS only for any external resources

## Support Plan

Prepare to handle:
- Installation questions
- Bug reports
- Feature requests
- Privacy concerns
- Compatibility issues

Set up:
- GitHub Issues: https://github.com/lucrat-erc20/wiki2grok/issues
- GitHub Discussions (optional)
- FAQ document in repository

## Cost Estimate

**Chrome Web Store**: $5 one-time fee
**Hosting ZIP files**: Free (GitHub) or minimal (<$1/month for web hosting)
**Domain (optional)**: ~$10-15/year
**Support time**: Variable

---

**Ready to distribute?** Follow the steps above and your extension will be ready for users!