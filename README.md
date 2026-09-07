# Yonggun Choi — Personal website

[Live website](https://ch2cooh.github.io/) · [LinkedIn](https://www.linkedin.com/in/yonggun-choi-3a1a43320/)

An English personal profile with a portrait, a short introduction, experience and education timelines, and expandable project entries. The design uses Instrument Serif, Manrope, black typography and lime accents. The site is static HTML and CSS; no installation, JavaScript or build service is required.

## Files

- `index.html`: all page content and styles.
- `assets/profile.jpg`: the owner's 400 × 400 LinkedIn profile photograph.
- `assets/fonts/`: self-hosted fonts and their SIL Open Font License files.
- `.nojekyll`: serves the files directly with GitHub Pages.

## Content sources

Professional information and the portrait were taken from the owner's [LinkedIn profile](https://www.linkedin.com/in/yonggun-choi-3a1a43320/) and its [project list](https://www.linkedin.com/in/yonggun-choi-3a1a43320/details/projects/), accessed on 7 September 2026. Internal AI transformation was also confirmed directly by the owner.

- SBS: Manager, May 2021–present; AI Partnerships Team, Policy Office.
- Korea Development Bank: Intern, September 2019–February 2020; Venture & Technology Finance Department.
- Sogang University: Bachelor's Degree, Electronic Engineering, March 2014–August 2021.
- Five government-funded projects appear in the same order as the LinkedIn profile.

The SDF-specific project's KRW 45 billion and five-year duration refer to its **parent project**. Other amounts are the government funding stated for each project on LinkedIn. These figures are not personal funding achievements, SBS-specific allocations, or amounts attributable solely to the owner. Calendar start/end dates and individual project roles were not provided, so they are not invented. The internal AX entry describes a current responsibility; it is not a claim about a named completed project.

## Edit the introduction or photograph

Change the text in `.hero-bio` inside `index.html`. The name, title and description also appear in the document metadata.

Replace `assets/profile.jpg` with the desired photograph. The layout preserves a square image. If its dimensions differ, update the image's `width` and `height` attributes. Keep descriptive alternative text.

## Add experience or education

In `#experience` or `#education`, duplicate a `.timeline-item` within the ordered list, then update the dates, institution, role and description. Put the latest entry first. Use `is-current` only for a current position.

```html
<li class="timeline-item">
  <div class="timeline-dates">
    <time datetime="YYYY-MM">Mon YYYY</time>
    <span><span class="to">—</span> Mon YYYY</span>
  </div>
  <div class="timeline-info">
    <h3 class="timeline-title">Institution</h3>
    <p class="role-line">Role or degree</p>
    <p class="team-line">Team or department</p>
    <p class="timeline-description">A brief, factual description.</p>
  </div>
</li>
```

Replace every example value before publishing. Optional lines can be omitted.

## Add a project

Add the following block to `#national-projects` or `#internal-projects`. Use the next sequence number. All project entries use native HTML disclosure controls that work with a keyboard and without JavaScript.

```html
<details class="project">
  <summary>
    <span class="project-number" aria-hidden="true">06</span>
    <span>
      <span class="project-title">Project title</span>
      <span class="project-agency">Funding agency or internal team</span>
    </span>
    <span class="disclosure" aria-hidden="true"></span>
  </summary>
  <div class="project-body">
    <p>Your role and a concise description of the work.</p>
    <dl class="project-meta">
      <div><dt>Period</dt><dd>Mon YYYY – Mon YYYY</dd></div>
      <div><dt>Role</dt><dd>Your actual role</dd></div>
    </dl>
  </div>
</details>
```

Keep only relevant, verified information. To open an entry by default, add the `open` attribute. When adding specific internal projects, the general `.workstream` block can be retained as an introduction or removed if it becomes redundant.

## Design and accessibility

Change CSS variables in `:root` to adjust the palette. The portrait, fonts and all other required assets are served locally. The layout adapts to mobile screens, includes a skip link and visible keyboard focus, and respects reduced-motion preferences. Page navigation and project disclosures use native browser behavior.

Font sources: [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope) and [Instrument Serif](https://github.com/google/fonts/tree/main/ofl/instrumentserif). License notices are retained in `assets/fonts/`.

## Publish

Commit changes to `main`. GitHub Pages is configured to publish from `main` → `/ (root)`. There is no separate build step. To preview locally, open `index.html` in a browser or serve the folder with a static file server.
