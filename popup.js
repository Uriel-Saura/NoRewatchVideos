function loadConfiguration() {
  chrome.storage.local.get(['enabled', 'minProgress'], (result) => {
    const enabled = result.enabled !== undefined ? result.enabled : true;
    const minProgress = result.minProgress !== undefined ? result.minProgress : 0;

    document.getElementById('toggleEnabled').checked = enabled;
    document.getElementById('progressInput').value = minProgress;

    updateStatus(enabled);
  });
}

loadConfiguration();

document.getElementById('toggleEnabled').addEventListener('change', (e) => {
  const enabled = e.target.checked;
  chrome.storage.local.set({ enabled }, () => updateStatus(enabled));
});

document.getElementById('progressInput').addEventListener('input', (e) => {
  let value = parseInt(e.target.value) || 0;
  
  // Validar que esté en el rango 0-100
  value = Math.max(0, Math.min(100, value));
  
  e.target.value = value;
  chrome.storage.local.set({ minProgress: value });
});

function updateStatus(enabled) {
  const status = document.getElementById('status');
  status.textContent = enabled ? '✅ Extension active' : '❌ Extension disabled';
  status.className = `status ${enabled ? 'active' : 'inactive'}`;
}