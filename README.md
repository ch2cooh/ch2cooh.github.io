# Yonggun Choi

An English personal profile with a photograph, a short introduction, experience, education and projects. The design uses a self-hosted Inter variable font, a soft white background, a responsive timeline and restrained motion.

## Files

- `index.html`: page content.
- `assets/style.css`: typography, layout and CSS animations.
- `assets/main.js`: navigation position and scroll entry animations.
- `assets/fonts/`: Inter Latin font and SIL Open Font License.
- `assets/profile.jpg`: the owner's LinkedIn profile photograph.
- `.nojekyll`: allows GitHub Pages to serve the static files directly.

No installation or build process is required. Open `index.html` in a browser to preview it locally. JavaScript adds a section indicator and one-time scroll entry animations; the content, anchor navigation and native project disclosures also work without it. No external scripts, font requests or analytics are used.

## Editing

Edit the introduction in `.intro`. Replace `assets/profile.jpg` to update the photograph.

To add experience or education, duplicate a `.timeline-item` in the relevant section and update its dates and content. Keep the most recent entry first.

To add a government-funded or internal project, copy a `<details class="project">` block into `#national-projects` or `#internal-projects`. Update the title, agency, description and metadata. Use the `open` attribute to expand it by default. Unnecessary fields can be omitted.

The internal AX entry currently describes a responsibility, rather than a named completed project. Add specific internal project names and details when available.

## Motion and accessibility

The header enters once, the navigation underline follows the current section, and timeline and project entries appear as they enter the viewport. Project disclosures animate their height in browsers supporting `interpolate-size` and `::details-content`; other browsers retain native open/close behavior. All motion respects `prefers-reduced-motion`. Links and disclosures support keyboard focus.

Implementation references: [Chrome: animating native details](https://developer.chrome.com/blog/styling-details), [web.dev: reduced motion](https://web.dev/articles/prefers-reduced-motion).

## Content sources

The photograph and professional information are from the owner's [LinkedIn profile](https://www.linkedin.com/in/yonggun-choi-3a1a43320/) and [project list](https://www.linkedin.com/in/yonggun-choi-3a1a43320/details/projects/), accessed on 7 September 2026. Internal AI transformation was confirmed directly by the owner.

The SDF-specific project's KRW 45 billion and five-year duration refer to its parent project. The other amounts are the government funding stated for each project. Calendar start/end dates, individual project roles and SBS-specific allocations are not inferred from these figures.

## GitHub Pages

The publishing source is `main` → `/ (root)`. GitHub Pages from a private personal repository requires GitHub Pro. On GitHub Free, making the repository private unpublishes its Pages site.

[GitHub's repository visibility documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)
