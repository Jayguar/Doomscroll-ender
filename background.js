chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && tab.url.includes("youtube.com/shorts")) {
    chrome.tabs.update(tabId, {url: "https://www.youtube.com/"});
  }
  if (changeInfo.status === "complete" && tab.url && (tab.url.includes("instagram.com/reels") || tab.url.includes("instagram.com/p"))) {
    chrome.tabs.update(tabId, {url: "https://www.instagram.com/"});
  }
});
