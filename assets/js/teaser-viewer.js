(() => {
  const viewer = document.getElementById('teaser-viewer');
  if (!viewer) return;

  const image = viewer.querySelector('.teaser-viewer-image');
  const caption = viewer.querySelector('.teaser-viewer-title');
  const closeButton = viewer.querySelector('.teaser-viewer-close');
  let trigger;

  document.querySelectorAll('[data-teaser-src]').forEach((button) => {
    button.addEventListener('click', () => {
      trigger = button;
      image.src = button.dataset.teaserSrc;
      image.alt = button.querySelector('img').alt;
      caption.textContent = button.dataset.teaserCaption;
      viewer.showModal();
      document.body.classList.add('teaser-viewer-open');
    });
  });

  closeButton.addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', (event) => {
    if (event.target !== viewer) return;
    const bounds = viewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      viewer.close();
    }
  });
  viewer.addEventListener('close', () => {
    document.body.classList.remove('teaser-viewer-open');
    if (trigger) trigger.focus({ preventScroll: true });
  });
})();
