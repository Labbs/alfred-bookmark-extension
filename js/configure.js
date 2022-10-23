function saveAlfredInstance(data) {
  console.log(data);
  if (data.url != "") {
    chrome.storage.sync.set({
      alfredUrl: data.url
    }, function () {
      document.getElementById('status').textContent = 'Alfred instance saved.';
      setTimeout(function () {
        document.getElementById('status').textContent = 'Alfred instance save failed.';
      }, 750);
    });
  }
  if (data.token != "") {
    chrome.storage.sync.set({
      alfredToken: data.token
    }, function () {
      document.getElementById('status').textContent = 'Alfred token saved.';
      setTimeout(function () {
        document.getElementById('status').textContent = 'Alfred token save failed.';
      }, 750);
    });
  }
}