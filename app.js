const data = window.portfolioData;

function skillCardTemplate(skill) {
  const tags = skill.tools
    .map(tag => `<span>${tag}</span>`)
    .join('');

  return `
    <article class="skill-card">
      <h3>${skill.title}</h3>

      <div class="skill-tags">
        ${tags}
      </div>
    </article>
  `;
}

function experienceTemplate(item) {
  const list = item.bullets.length
    ? item.bullets.map(bullet => `<li>${bullet}</li>`).join('')
    : '';

  const bulletList = list
    ? `<ul class="feature-list">${list}</ul>`
    : '';

  return `
    <article class="timeline-item">

      <div class="timeline-date">
        ${item.period}
      </div>

      <div class="timeline-content">

        <h3>${item.title}</h3>

        <div class="company">
          ${item.company}
        </div>

        <p>
          ${item.description}
        </p>

        ${bulletList}

      </div>

    </article>
  `;
}

function educationTemplate(item) {

  const list = item.bullets && item.bullets.length
    ? item.bullets.map(bullet => `<li>${bullet}</li>`).join('')
    : '';

  const bulletList = list
    ? `<ul class="feature-list">${list}</ul>`
    : '';

  return `
    <article class="timeline-item">

      <div class="timeline-date">
        ${item.period}
      </div>

      <div class="timeline-content">

        <div class="education-head">
          <h3>${item.title}</h3>
        </div>

        <div class="institution">
          ${item.institution}
        </div>

        <p>
          ${item.description}
        </p>

        ${bulletList}

      </div>

    </article>
  `;
}

function languageTemplate(languages) {
  const rows = languages.items
    .map(item => `
      <div class="language-row">
        <span class="language-label">
          ${item.name}
        </span>

        <span class="language-value">
          ${item.level}
        </span>
      </div>
    `)
    .join('');

  return `
    <article class="language-card">
      ${rows}
    </article>
  `;
}

function projectTemplate(project) {
  // const tags = project.tags
  //   .map(tag => `<span>${tag}</span>`)
  //   .join('');

  return `
    <article class="project-card">

      <h3>
        ${project.title}
      </h3>

      <p>
        ${project.description}
      </p>
    </article>
  `;
}

function initPortfolio() {

  /* HOME */

  document.querySelector('#home .summary-text').textContent =
    data.profile.intro;

  document.querySelector('#home .profile-details h2').textContent =
    data.profile.name;

  document.querySelector('#home .role-tag').textContent =
    data.profile.role;

  /* SKILLS */

  const skillGrid = document.querySelector('#skills .skill-grid');

  skillGrid.innerHTML = data.skills
    .map(skillCardTemplate)
    .join('');

  /* EXPERIENCE */

  const experienceGrid =
    document.querySelector('#experience .timeline');

  experienceGrid.innerHTML = data.experience
    .map(experienceTemplate)
    .join('');

  /* EDUCATION */

  const educationGrid =
    document.querySelector('#education .timeline');

  educationGrid.innerHTML = data.education
    .map(educationTemplate)
    .join('');

  /* LANGUAGES */

  const languageGrid =
    document.querySelector('#languages .language-grid');

  languageGrid.innerHTML =
    languageTemplate(data.languages);

  /* PROJECTS */

  const projectGrid =
    document.querySelector('#projects .project-grid');

  projectGrid.innerHTML = data.projects
    .map(projectTemplate)
    .join('');
}

document.addEventListener(
  'DOMContentLoaded',
  initPortfolio
);