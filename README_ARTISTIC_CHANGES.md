# Artistic Homepage Modification Notes

This modified version keeps the original Jekyll/GitHub Pages structure while adding a more artistic academic visual style.

## Main design direction

The homepage now follows a "Digital Scholar / Knowledge Network / Research Atelier" style. The goal is not to make the page flashy, but to make it more recognizable and visually connected to research themes such as AI, healthcare, bibliometrics, patent intelligence, and knowledge networks.

## Modified files

- `assets/css/global.css`
  - Rebuilt the visual system with soft background gradients, glass-like cards, refined typography, rounded publication cards, and timeline-like year navigation.

- `_layouts/default.html`
  - Removed inline quote styling from the layout and moved visual responsibility to `global.css`.
  - Used `relative_url` for the main CSS, favicon, and common JS paths.
  - Added a simple meta description.

- `_includes/widgets/profile_card.html`
  - Added a hero-style profile card.
  - Added a visual identity label: `Digital Scholar · Knowledge Networks`.
  - Added research tags based on `profile.yml`.
  - Improved portrait and contact link styling.

- `index.html`
  - Added a new "Research Constellation" section with four research nodes:
    - AI in Healthcare
    - Knowledge Networks
    - Patent Intelligence
    - Generative AI
  - Tuned the animated network background to be softer and less distracting.

- `publications.html`
  - Replaced the plain publication block with year-based artistic blocks.
  - Added paper counts next to each year.
  - Reworked the note at the top into a designed publication note.

- `_includes/widgets/publication_item.html`
  - Added publication-item and publication-title classes.
  - Changed publication links from bracket text to small pill-style links.
  - Used `relative_url` for cover images and placeholders.

- `_data/profile.yml`
  - Rewrote the short bio into a more research-oriented academic narrative.
  - Added `research_interests` for the homepage tags.
  - Fixed the duplicated `date` field under Nanjing University.
  - Corrected small spelling issues such as "Business Administration" and "Second Prize".

## How to use

Replace your original repository with this modified version, or only copy the modified files listed above into your current repository.

Then run locally:

```bash
bundle install
bundle exec jekyll serve
```

Open the local address printed by Jekyll to preview the site.
