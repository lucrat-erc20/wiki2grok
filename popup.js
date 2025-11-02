const autoRedirectToggle = document.getElementById('autoRedirect');
const statusDiv = document.getElementById('status');

// Load current setting
chrome.storage.sync.get(['autoRedirect'], (result) => {
  autoRedirectToggle.checked = result.autoRedirect || false;
});

// Save setting when changed
autoRedirectToggle.addEventListener('change', async () => {
  const isEnabled = autoRedirectToggle.checked;
  
  await chrome.storage.sync.set({ autoRedirect: isEnabled });
  
  statusDiv.textContent = isEnabled 
    ? '✓ Auto-redirect enabled' 
    : '✓ Manual popup mode enabled';
  statusDiv.style.display = 'block';
  
  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 2000);
});