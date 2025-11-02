chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['enabled', 'minProgress'], (result) => {
    const config = {
      enabled: result.enabled !== undefined ? result.enabled : true,
      minProgress: result.minProgress !== undefined ? result.minProgress : 25
    };
    
    chrome.storage.local.set(config);
  });
});
