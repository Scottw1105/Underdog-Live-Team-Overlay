document.getElementById('saveButton').addEventListener('click', () => {
    var username = document.getElementById('username').value;
    chrome.storage.sync.set({ username }, () => {
      alert('Settings saved.');
    });
  });
  