const navLinks = Array.from(
  document.querySelectorAll('.nav-link')
);

for (const link of navLinks) {

  link.addEventListener('click', () => {

    navLinks.forEach(item => {
      item.classList.toggle(
        'active',
        item === link
      );
    });

  });

}

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.getAttribute('id');

      navLinks.forEach((link) => {

        const anchor = link.getAttribute('href');

        link.classList.toggle(
          'active',
          anchor === `#${id}`
        );

      });

    });

  },
  {
    rootMargin: '-15% 0px -60% 0px'
  }
);

[
  'skills',
  'experience',
  'education',
  'languages',
  'projects'
].forEach((sectionId) => {

  const section =
    document.getElementById(sectionId);

  if (section) {
    observer.observe(section);
  }

});

const themeToggle =
  document.querySelector('.theme-toggle');

const themeIcon =
  document.querySelector('.theme-icon');

if (themeToggle) {

  themeToggle.addEventListener('click', () => {

    const isDark =
      document.body.classList.toggle('dark-mode');

    themeIcon.textContent =
      isDark ? '🌙' : '☀️';

  });

}