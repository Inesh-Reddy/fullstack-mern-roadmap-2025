# Project 1: Personal Portfolio Showcase (Build New - Semantic-Driven Layout)

### Objective

Construct a comprehensive single-page personal portfolio website titled "CodeVoyager Hub" that serves as an interactive showcase of your full-stack journey (starting with Day -1). This project demands mastery of **every HTML-1 topic from your notes**—from doctype/structure to accessibility/SEO—woven into a narrative-driven layout. The challenge lies in creating a "journey timeline" that semantically nests content (e.g., articles as milestones), incorporates exhaustive form interactions for "visitor feedback," and ensures pixel-perfect validation (W3C + Lighthouse accessibility score >90). It's tough due to balancing 30+ elements without semantic violations (e.g., no generic divs for core content), but achievable by building section-by-section from your notes' code snippets.

### Requirements (Exhaustive Coverage – Zero Skips)

- **DOCTYPE, Basic Structure (html, head, body):** `<!DOCTYPE html>`. `<head>`: `<title>CodeVoyager Hub</title>`, `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1">`, `<meta name="description" content="Day -1 Full-Stack Portfolio: HTML Mastery Showcase">`, `<meta name="keywords" content="HTML, semantics, fullstack, journey">` for SEO. `<body>` envelopes all.
- **Headings & Text Content (h1-h6, p, strong, em):** Strict hierarchy: `<h1>` site title in header. `<h2>` for 4 main milestones (e.g., "Day -1 Foundations"), `<h3>` for sub-topics (e.g., "Semantic Deep Dive"), down to `<h6>` for micro-details (e.g., "Tag Nuances"). 4-6 paragraphs per milestone with `<strong>` for concepts (e.g., "block elements dominate layouts") and `<em>` for reflections (e.g., "transformative insights").
- **Block vs. Inline Elements (div, span):** Minimal `<div>` for a non-semantic hero overlay only (`<div class="journey-banner">` wrapping intro text + image). `<span>` inline for 6 highlights (e.g., `<span class="milestone-tag">Achieved</span>` in timelines)—no more, to enforce discipline.
- **Links & Navigation (a, nav):** `<nav>` with `<ul>` of 6 anchors: Home, Milestones, Skills, Feedback, Resources, Contact (e.g., `<a href="#milestones">Jump to Day -1</a>`). One external `<a href="https://github.com/yourrepo" rel="noopener noreferrer">GitHub Repo</a>` with `title="View Source"`.
- **Images & Media (img, figure/figcaption):** 5 images: Profile `<img src="profile.jpg" alt="Developer Portrait" width="200" height="200" loading="lazy">` in header. 3 milestone figs: `<figure><img src="html-notes.jpg" alt="Handwritten HTML Sketch" width="400" height="300"><figcaption>From Notes: Structure Diagram - Nov 12, 2025</figcaption></figure>`. One `<img>` in aside for "Journey Icon" (alt: "Code Path Symbol").
- **Lists (ul, ol, dl):** Timeline `<ul>` in main for 5 journey bullets (unordered phases). `<ol>` in a milestone for "Build Steps" (6 numbered from notes: 1. Doctype, ..., 6. Validate). `<dl>` in skills section: 4 terms (e.g., `<dt>Block</dt><dd>Full-width containers like div...</dd>` from notes).
- **Tables (table, thead, tbody, tfoot, th, td):** "Topic Mastery Table" in a section: Rows for 8 HTML concepts (e.g., Semantics, Forms); columns: Tag Examples | Usage | Notes. `<thead>`: Headers with `<th scope="col">`. `<tbody>`: Data rows (e.g., `<td><code>header</code></td>`). `<tfoot>`: Summary row "Total Topics: 8/8 Mastered". Add `headers="topic-col"` for accessibility.
- **Semantic Elements (header, nav, main, section, article, aside, footer):** `<header>`: h1 + nav + profile img. `<main>`: Core journey. 4 `<article>`s in `<section id="milestones">` (each: h3, p, list/table). `<aside>`: dl skills + ul quick-links + icon img. `<footer>`: p copyright, ul socials (3 a-tags), address with email.
- **Forms & Inputs (form, input types, label, select, textarea, button):** "Visitor Feedback Hub" form in dedicated section (`<form action="/feedback" method="post">`):
  - Basics: `<label for="name">Name</label><input type="text" id="name" required autocomplete="name">`.
  - Contact: `<input type="email" placeholder="journey@codevoyager.com">`, `<input type="tel" pattern="[0-9]{10}" title="10 digits">`.
  - Dates: `<input type="date" min="2025-11-12" max="2026-01-01">` for "Next Check-in".
  - Numbers: `<input type="number" min="1" max="10" value="5" step="0.5">` for "Skill Rating".
  - Range: `<label for="progress">Journey Progress</label><input type="range" id="progress" min="0" max="100"><output for="progress"></output>%`.
  - Checkboxes: `<fieldset><legend>Topics Mastered</legend><input type="checkbox" name="topic" value="structure" checked> Structure</fieldset>` (5 options).
  - Radios: `<input type="radio" name="feedback" value="helpful"> Helpful` (3 types).
  - Select: `<label for="milestone">Favorite Milestone</label><select id="milestone"><option value="">Select</option><option>HTML-1</option></select>` (4 opts).
  - Textarea: `<label for="notes">Your Thoughts</label><textarea id="notes" rows="6" cols="50" maxlength="1000" placeholder="Reflect on my Day -1..."></textarea>`.
  - File: `<input type="file" accept="image/*,.pdf" multiple>` for "Share Your Notes".
  - Buttons: `<button type="submit">Submit Feedback</button>`, `<button type="reset">Reset Form</button>`.
  - Group with 2 fieldsets; add `<datalist id="suggestions"><option>Great start!</option></datalist>` linked to textarea.
- **Accessibility & SEO:** `<html lang="en">`. `aria-label="Main Navigation"` on nav, `role="search"` on a mini-search form (`<input type="search">`). Alt/title on all media, `tabindex="0"` on key sections. SEO: Canonical `<link rel="canonical" href="/">`, Open Graph metas (e.g., `<meta property="og:title" content="CodeVoyager Hub">`).
- **Notes Integration:** Embed a `<details><summary>Day -1 Notes Excerpt</summary><pre><code>&lt;!-- From 2025-11-12-HTML-Project1-notes.md --&gt;\n&lt;html&gt;...&lt;/html&gt;</code></pre></details>` with snippet from your attached notes file.

### Challenge Level

Hard—integrate notes snippet semantically (e.g., in article), ensure form outputs tie to a preview p (e.g., "Rating: <output>5</output>"), validate no errors. Time: 3-5 hours. Test: Browser + WAVE tool. Output: index.html, commit to repo as "Day-1-Build".

### Why This Makes You the Best

Simulates a real dev blog (e.g., dev.to style), forcing notes-to-code translation—your portfolio starts strong!

### Setup Instructions

1. Create a new directory: `mkdir project1-portfolio && cd project1-portfolio`
2. Create `index.html` and paste your built code.
3. Add placeholder images (e.g., download free from Unsplash).
4. Validate: Run through W3C Markup Validator and Lighthouse (Chrome DevTools).
5. Commit: `git init && git add . && git commit -m "Day-1: HTML Portfolio Build"`

---
