// Background service worker
// Sets default settings on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ autoRedirect: false });
});