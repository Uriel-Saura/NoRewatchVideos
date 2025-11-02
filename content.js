let config = null;
let observer = null;
let intervalId = null;

// Cargar configuración guardada antes de iniciar
function initExtension() {
  chrome.storage.local.get(['enabled', 'minProgress'], (result) => {
    config = {
      enabled: result.enabled,
      minProgress: result.minProgress
    };
    startExtension();
  });
}

// Iniciar la extensión con la configuración correcta
function startExtension() {
  hideWatchedVideos();
  
  if (!observer) {
    observer = new MutationObserver(hideWatchedVideos);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  if (!intervalId) {
    intervalId = setInterval(hideWatchedVideos, 3000);
  }
}

chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) {
    config.enabled = changes.enabled.newValue;
    config.enabled ? hideWatchedVideos() : showAllVideos();
  }
  if (changes.minProgress) {
    config.minProgress = changes.minProgress.newValue;
    showAllVideos();
    hideWatchedVideos();
  }
});

function showAllVideos() {
  document.querySelectorAll('[data-hidden="true"]').forEach(video => {
    video.style.display = '';
    video.removeAttribute('data-hidden');
  });
}

// Selectores constantes para evitar repetición y facilitar mantenimiento
const SELECTORS = {
  PROGRESS_BAR: 'ytThumbnailOverlayProgressBarHostWatchedProgressBarSegment',
  FEED_CONTAINERS: 'ytd-rich-item-renderer, ytd-compact-video-renderer, ytd-video-renderer, ytd-grid-video-renderer',
  SIDEBAR_CONTAINER: 'yt-lockup-view-model'
};

function hideWatchedVideos() {
  if (!config.enabled) return;
  
  const progressBars = document.getElementsByClassName(SELECTORS.PROGRESS_BAR);
  
  Array.from(progressBars).forEach(progressBar => {
    const progress = getVideoProgress(progressBar);
    if (progress === null || progress < config.minProgress) return;
    
    const videoContainer = findVideoContainer(progressBar);
    if (videoContainer && !videoContainer.hasAttribute('data-hidden')) {
      hideVideoContainer(videoContainer);
    }
  });
}

// Extrae el progreso del video de la barra de progreso
function getVideoProgress(progressBar) {
  const widthStyle = progressBar?.style?.width;
  return widthStyle ? parseInt(widthStyle, 10) : null;
}

// Encuentra el contenedor del video (feed o sidebar)
function findVideoContainer(progressBar) {
  return progressBar.closest(SELECTORS.FEED_CONTAINERS) || 
         progressBar.closest(SELECTORS.SIDEBAR_CONTAINER);
}

// Oculta el contenedor del video
function hideVideoContainer(container) {
  container.style.display = 'none';
  container.setAttribute('data-hidden', 'true');
}

initExtension();
