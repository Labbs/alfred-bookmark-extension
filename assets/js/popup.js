chrome.tabs.query({
  active: true,
  currentWindow: true
}, ([currentTab]) => {
  document.getElementById('title').setAttribute('value', currentTab.title);
  document.getElementById('url').setAttribute('value', currentTab.url);
  document.getElementById('favicon').setAttribute('value', currentTab.favIconUrl);
});
