chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /(?=http|s:\/\/dev\.azure\.com\/alelo\/)(.*)(?=\/_library)(.*)/g.test(tab.url)) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["./styles/style.css"]
    }).then(() => {
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["./script.js"]
      })
    }).catch(err => console.log(err));
  }
});
