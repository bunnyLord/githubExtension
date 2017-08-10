chrome.browserAction.onClicked.addListener(function(tab) {
  const url = tab.url;
	
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="green"'
  });
});
