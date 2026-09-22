const playButton = document.getElementById('playBtn');

if (playButton) {
  playButton.addEventListener('click', () => {
    const caption = playButton.closest('.video-box').querySelector('.video-caption');
    caption.textContent = 'Free training coming soon';
  });
}
