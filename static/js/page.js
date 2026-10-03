(() => {
  'use strict';
  // Overview video chapters: seek on click, highlight the current chapter.
  const video = document.getElementById('overview-video');
  const chapters = [...document.querySelectorAll('.chapters button')];
  if (video && chapters.length) {
    chapters.forEach(button => button.addEventListener('click', () => {
      video.currentTime = Number(button.dataset.t);
      video.play().catch(() => {});
    }));
    const mark = () => {
      let current = null;
      chapters.forEach(button => { if (video.currentTime >= Number(button.dataset.t)) current = button; });
      chapters.forEach(button => button.setAttribute('aria-current', String(button === current && video.currentTime > 0)));
    };
    video.addEventListener('timeupdate', mark);
    video.addEventListener('seeked', mark);
  }

  // Hairline under the sticky nav once the page scrolls.
  const nav = document.getElementById('topnav');
  if (nav) {
    const update = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // Copy buttons.
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    const source = document.getElementById(button.dataset.copy);
    try {
      await navigator.clipboard.writeText(source.textContent);
      button.textContent = 'Copied';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(source);
      getSelection().removeAllRanges();
      getSelection().addRange(range);
      button.textContent = 'Selected';
    }
    setTimeout(() => { button.textContent = 'Copy'; }, 1600);
  }));
})();
