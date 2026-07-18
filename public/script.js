document.addEventListener('DOMContentLoaded', function() {
  const videoOverlay = document.querySelector('.video-overlay-content');
  if (videoOverlay) {
    setTimeout(() => {
      videoOverlay.classList.add('fade-out');
    }, 5000);
  }
});
