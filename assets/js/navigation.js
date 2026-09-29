const moreNavigation = document.getElementById('site-nav-more');

if (moreNavigation) {
  moreNavigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      moreNavigation.open = false;
    });
  });

  document.addEventListener('click', (event) => {
    if (!moreNavigation.contains(event.target)) {
      moreNavigation.open = false;
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && moreNavigation.open) {
      if (moreNavigation.contains(document.activeElement)) {
        moreNavigation.querySelector('summary').focus();
      }
      moreNavigation.open = false;
    }
  });
}
