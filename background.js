chrome.browserAction.onClicked.addListener(
  function(tab) { 
    chrome.tabs.executeScript(null, {file: "download.js"});
  }
);

chrome.extension.onMessage.addListener(function(links) {
  for (var i = 0; i < links.length; ++i) {
    chrome.downloads.download({url: links[i]});
  }
});
