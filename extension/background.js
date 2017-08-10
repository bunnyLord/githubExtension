chrome.browserAction.onClicked.addListener(function(tab) {
  const url = tab.url;
	
chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});
