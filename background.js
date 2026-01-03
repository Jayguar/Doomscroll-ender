chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com/shorts")) {
    chrome.tabs.remove(tabId);
    chrome.tabs.create({url: "https://www.youtube.com/"});
  }
});
