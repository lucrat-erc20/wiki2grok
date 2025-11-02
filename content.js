(async function() {
  // Get the page name from the URL
  const url = window.location.href;
  const wikiMatch = url.match(/https?:\/\/([a-z]+)\.wikipedia\.org\/wiki\/(.+)/);
  
  if (!wikiMatch) return;
  
  const pageName = decodeURIComponent(wikiMatch[2]);
  
  // Get user's redirect preference
  const { autoRedirect } = await chrome.storage.sync.get(['autoRedirect']);
  
  // Build the Grokipedia URL (we'll default to exact page, fallback to search is handled by Grokipedia)
  const grokipediaUrl = `https://grokipedia.com/page/${pageName}`;
  
  if (autoRedirect) {
    // Auto-redirect mode - just go straight to Grokipedia
    window.location.replace(grokipediaUrl);
  } else {
    // Manual mode - show popup overlay
    showRedirectPopup(grokipediaUrl, pageName);
  }
})();

function showRedirectPopup(grokipediaUrl, pageName) {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'grokipedia-redirect-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999999;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;
  
  // Create popup box
  const popup = document.createElement('div');
  popup.style.cssText = `
    background: white;
    padding: 32px;
    border-radius: 12px;
    max-width: 500px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  `;
  
  popup.innerHTML = `
    <h2 style="margin: 0 0 16px 0; font-size: 24px; color: #333;">
      🌍 Redirect to Grokipedia?
    </h2>
    <p style="margin: 0 0 24px 0; color: #666; font-size: 16px; line-height: 1.5;">
      This Wikipedia page is available on Grokipedia: <strong>${pageName.replace(/_/g, ' ')}</strong>
    </p>
    <div style="display: flex; gap: 12px;">
      <button id="grokipedia-go" style="
        flex: 1;
        padding: 14px 24px;
        background: #1a73e8;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      ">Go to Grokipedia</button>
      <button id="grokipedia-stay" style="
        flex: 1;
        padding: 14px 24px;
        background: #f5f5f5;
        color: #333;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
      ">Stay on Wikipedia</button>
    </div>
    <p style="margin: 16px 0 0 0; font-size: 13px; color: #999; text-align: center;">
      💡 Tip: Enable auto-redirect in extension settings
    </p>
  `;
  
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
  
  // Add event listeners
  document.getElementById('grokipedia-go').addEventListener('click', () => {
    window.location.href = grokipediaUrl;
  });
  
  document.getElementById('grokipedia-stay').addEventListener('click', () => {
    overlay.remove();
  });
  
  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      overlay.remove();
    }
  });
}