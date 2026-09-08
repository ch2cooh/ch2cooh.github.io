(() => {
  const nav = document.querySelector('.nav');
  const links = [...nav.querySelectorAll('a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  const indicator = document.createElement('span');
  indicator.className = 'nav-indicator';
  indicator.setAttribute('aria-hidden', 'true');
  nav.append(indicator);

  function updateNavigation() {
    let active = 0;
    const threshold = nav.getBoundingClientRect().height + 48;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= threshold) active = index;
    });
    if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      active = sections.length - 1;
    }
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    nav.style.setProperty('--indicator-x', `${links[active].offsetLeft}px`);
    nav.style.setProperty('--indicator-width', `${links[active].offsetWidth}px`);
    nav.classList.add('has-indicator');
  }

  let framePending = false;
  function queueNavigationUpdate() {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(() => {
      updateNavigation();
      framePending = false;
    });
  }
  updateNavigation();
  window.addEventListener('scroll', queueNavigationUpdate, { passive: true });
  window.addEventListener('resize', queueNavigationUpdate);
  window.addEventListener('pageshow', queueNavigationUpdate);
  document.fonts?.ready.then(queueNavigationUpdate);
  document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('toggle', queueNavigationUpdate);
  });

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealed = new WeakSet();
  const activeAnimations = new Set();
  let revealObserver;

  function setupReveals() {
    revealObserver?.disconnect();
    if (motionPreference.matches) {
      activeAnimations.forEach(animation => animation.cancel());
      activeAnimations.clear();
      return;
    }
    if (!('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

    // Animate at entry rather than hiding content while it waits for JavaScript.
    revealObserver = new IntersectionObserver(entries => {
      let stagger = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting || revealed.has(entry.target)) return;
        revealed.add(entry.target);
        revealObserver.unobserve(entry.target);
        const animation = entry.target.animate(
          [{ opacity: 0, transform: 'translateY(16px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 700, delay: Math.min(stagger++ * 60, 180), easing: 'cubic-bezier(.22, 1, .36, 1)', fill: 'backwards' }
        );
        activeAnimations.add(animation);
        animation.onfinish = animation.oncancel = () => activeAnimations.delete(animation);
      });
    }, { rootMargin: '0px 0px -24px 0px', threshold: .05 });
    document.querySelectorAll('.section > h2, .timeline-item, .project-category, .project, .internal-projects').forEach(element => {
      if (!revealed.has(element)) revealObserver.observe(element);
    });
  }
  setupReveals();
  motionPreference.addEventListener('change', setupReveals);
})();
