# Project 2: HTML Mastery Quiz Generator (Enhance Existing - Integrate with About Me Base)

### Objective

Evolve a basic "About Me" page (from schedule's simple project) into an interactive quiz tool "HTML QuizForge" that tests users on Day -1 topics while showcasing your bio. Build atop the simple structure (assume it has basic h1 bio + p intro), layering **all HTML-1 elements** for a quiz flow: Questions as forms/tables, results as semantics. Difficulty: Retroactively enhance without breaking original (e.g., wrap bio in aside), add 10-question quiz with varied inputs, ensure ARIA for quiz navigation—hard nesting (forms in articles), but grounded in notes' snippets for achievability.

### Requirements (Full Integration – No Skips, Enhances Simple Base)

- **DOCTYPE, Basic Structure:** Reuse simple's doctype/head (add SEO metas: `<meta name="robots" content="index">`, keywords from notes). Body: Enhance with main around original bio p.
- **Headings & Text Content:** Original h1 ("About Me") becomes h2 in header. New `<h1>`: "HTML QuizForge". `<h3-h6>` for 10 questions (e.g., `<h4>Q1: Structure</h4><h6>Hint: Doctype first</h6>`), instructional ps with strong/em (e.g., "<strong>Quiz your HTML knowledge!</strong> <em>Based on my Nov 12 notes.</em>").
- **Block vs. Inline:** Original divs? Replace with semantics. Add `<span class="quiz-score">0/10</span>` inline in header (updates via output).
- **Links & Navigation:** Enhance simple's links: Add `<nav><ul>` with "Bio | Quiz | Score | Resources" (anchor to #quiz). External: `<a href="notes.md" download>Download My Notes</a>`.
- **Images & Media:** Original profile img? Add figcaption: "Quiz Master - From Day -1". New: 4 question imgs (e.g., `<img src="table-example.jpg" alt="Table Structure" width="250">` in Q5), one in footer for "Cert Icon".
- **Lists (ul, ol, dl):** Original ul bio points? Nest in aside. Quiz: `<ol>` for 10 numbered questions. `<ul>` for multiple-choice options (3 per Q). `<dl>` results: `<dt>Score</dt><dd>8/10: Pro!</dd>` (dynamic via form).
- **Tables:** New "Quiz Leaderboard" `<table>` in footer: `<thead>` (Rank | Name | Score), `<tbody>` 5 dummy rows, `<tfoot>` your high score. Scope/th on ths; enhances simple's potential list.
- **Semantic Elements:** Wrap original bio in `<aside>` (now sidebar). `<header>`: h1 + nav. `<main><section id="quiz"><article>` per 2 questions (5 articles). `<footer>`: Table + original copyright ul.
- **Forms & Inputs:** Core enhancement: Multi-step quiz form (`<form id="quiz-form">`, 10 fieldsets as "steps"):
  - Text: Q1 `<input type="text" pattern="&lt;!DOCTYPE&gt;" title="Exact match">` for doctype.
  - Email/Tel: Q2 contact sim (`<input type="email">`).
  - Number/Range: Q3 `<input type="number" min="1" max="6">` headings count; Q4 range for "Inline % (0-100)".
  - Date/Time: Q5 `<input type="date">` for "HTML Invention?" (hint: 1990s).
  - Checkbox/Radio: Q6-7 multiple choice (radios for single, checkboxes multi; e.g., "Semantic tags?" with 4 opts).
  - Select: Q8 `<select><optgroup><option>header</option></optgroup></select>` for elements.
  - Textarea: Q9 `<textarea placeholder="Explain block vs inline">` (max 200).
  - File: Q10 `<input type="file" accept=".html">` upload sample code.
  - Hidden: `<input type="hidden" name="day" value="-1">`. Buttons: `<button type="submit">Score Quiz</button>`, per-question "Next" (type=button). Outputs for score: `<output id="total"></output>`.
  - Fieldsets with legends (e.g., "Q1-2: Basics"); datalist for select suggestions.
- **Accessibility & SEO:** Add `aria-labelledby` to questions, `role="form"` on quiz. `aria-invalid="true"` on wrong patterns. SEO: Breadcrumbs ol in nav, schema `<script type="application/ld+json">{"@type":"Quiz","name":"HTML-1 Mastery"}</script>`.
- **Notes Integration:** Embed notes md as `<iframe src="2025-11-12-HTML-Project1-notes.md" title="Day -1 Notes" width="100%" height="400"></iframe>` in resources section (or link if no embed).

### Challenge Level

Hard—migrate simple page seamlessly (e.g., bio now contextual to quiz), score logic via 10 tied outputs (test manually). Time: 4-6 hours. Test: Tab through quiz, validate enhanced file. Output: Enhanced about-me.html, commit as "Day-1-Enhance".

### Why This Makes You the Best

Transforms basic into educational tool (like freeCodeCamp quiz), blending personal story with notes—interview gold for "show, don't tell" HTML depth. Commit both to repo; tomorrow's CSS awaits!

### Setup Instructions

1. Start from your simple "About Me" HTML file: Copy to `project2-quiz/enhanced-about-me.html`.
2. Layer in enhancements per requirements.
3. Add placeholder images and notes.md file.
4. Validate: W3C + manual tab navigation for ARIA.
5. Commit: `git add . && git commit -m "Day-1: HTML Quiz Enhancement"`
