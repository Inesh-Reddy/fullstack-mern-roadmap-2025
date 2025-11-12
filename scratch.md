### Updated Full Stack Roadmap Schedule: Notes, Labs, and Projects Focus (Nov 12 - Dec 31, 2025)

Based on your refinements, I've streamlined the schedule to **only HTML, CSS, JavaScript, React, and MERN** sections from the roadmap. Total learning days remain 43 (Sun-Fri; Sat rest).

**Key Changes**:

- **Daily Structure**: No separate "core topics" dives—**every day is project-driven**. Each day:
  - **Project 1 (Current Learning, 2-3 hrs)**: Build a mini-project using **today's topic** (e.g., HTML forms for a contact app).
  - **Project 2 (Previous Integration, 2-3 hrs)**: Enhance an **ongoing/previous project** by applying **current + past learnings** (e.g., add CSS Flexbox to yesterday's HTML form project).
- **Notes**: After each project, create a daily note file (Markdown) summarizing code snippets, challenges, and key takeaways. Attach here daily as planned.
- **Labs**: Every **Friday**: 1 full lab project (4-6 hrs) reviewing the week's projects. No new topics—refactor/debug/integrate across previous.
- **Pacing**: Grouped into 5 sections. ~8-10 days/section. End with buffer for MERN acceleration/review. All projects build toward a cumulative "Portfolio App" (e.g., evolving from static HTML to full MERN movie dashboard).
- **Tracking**: Use the GitHub repo (setup below) to commit projects daily. Name branches like `html-day1`.

#### Section Overview Table

| Section        | Weeks/Days                          | Focus                                              | Key Projects (Cumulative)                          | Lab Days                           |
| -------------- | ----------------------------------- | -------------------------------------------------- | -------------------------------------------------- | ---------------------------------- |
| **HTML**       | Week 1 (Nov 12-21: 6 days)          | Fundamentals & structure                           | Basic pages → Forms/tables portfolio stub          | Fri: HTML integration lab          |
| **CSS**        | Week 2 (Nov 23-28: 6 days)          | Styling & layouts                                  | Styled HTML pages → Responsive designs             | Fri: CSS responsive lab            |
| **JavaScript** | Weeks 3-4 (Nov 30-Dec 12: 12 days)  | Logic, async, DOM, OOPS, projects (Weather/Kanban) | Interactive apps → Kanban/Weather with events/OOPS | Fri: JS async/OOPS labs            |
| **React**      | Weeks 5-6 (Dec 14-26: 12 days)      | Components, state, Redux, IMDb project             | Component migration → Full IMDb clone              | Fri: React state/Redux labs        |
| **MERN**       | Week 7 (Dec 28-31: 4 days + buffer) | Backend, auth, full project                        | API integration → Movie/Theater app                | Dec 31: MERN full-stack lab/review |

#### Detailed Daily Schedule (Projects + Notes/Labs)

Each day lists: **Topics (for context)**, **Project 1: Current**, **Project 2: Previous Integration**, **Notes Template**.

| Date                                                                              | Day | Topics                                                         | Project 1: Current (Build New)                                                                                                             | Project 2: Previous Integration (Enhance Existing)       | Notes                                                                                      |
| --------------------------------------------------------------------------------- | --- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **HTML Section**                                                                  |     |                                                                |                                                                                                                                            |                                                          |                                                                                            |
| Nov 12                                                                            | Wed | HTML-1: Web Fundamentals & Intro to HTML                       | Simple "About Me" page with `<head>`, `<body>`, semantic tags.                                                                             | N/A (Day 1: Just commit Project 1 to repo).              | `2025-11-12-HTML-Project1-notes.md`: Tag explanations, code snippet of `<html>` structure. |
| Nov 13                                                                            | Thu | HTML-2: HTML Lists, Tables, Forms                              | Contact form with `<ul>`, `<table>` for skills/resume.                                                                                     | Add lists/tables to yesterday's "About Me" page.         | `2025-11-13-HTML-Projects-notes.md`: Form accessibility tips, integration challenges.      |
| Nov 14                                                                            | Fri | **LAB: HTML Review**                                           | Lab Project: Merge Projects 1-2 into "Static Portfolio" (add navigation links).                                                            | Refactor both projects for mobile-friendly tables/forms. | `2025-11-14-HTML-Lab-notes.md`: Debug log, final HTML wireframe code.                      |
| Nov 16                                                                            | Sun | (Buffer: Review HTML-1/2)                                      | Duplicate form project with embedded images/links.                                                                                         | Integrate images into portfolio stub from lab.           | `2025-11-16-HTML-Buffer-notes.md`: Best practices for semantic HTML.                       |
| Nov 17                                                                            | Mon | (Buffer: Review HTML-1/2)                                      | Resume page using tables for experience sections.                                                                                          | Link resume to contact form in portfolio.                | `2025-11-17-HTML-Buffer-notes.md`: Table styling prep for CSS.                             |
| Nov 18                                                                            | Tue | (Buffer: Review HTML-1/2)                                      | Blog post mockup with lists for articles.                                                                                                  | Add blog section to portfolio via forms for "comments".  | `2025-11-18-HTML-Buffer-notes.md`: Project evolution summary.                              |
| Nov 19                                                                            | Wed | (Buffer: Review HTML-1/2)                                      | FAQ page with accordion-style lists (HTML only).                                                                                           | Embed FAQ into main portfolio nav.                       | `2025-11-19-HTML-Buffer-notes.md`: Accessibility notes.                                    |
| Nov 20                                                                            | Thu | (Buffer: Review HTML-1/2)                                      | Product catalog table for "skills/tools".                                                                                                  | Update portfolio's resume table with catalog data.       | `2025-11-20-HTML-Buffer-notes.md`: Data organization tips.                                 |
| Nov 21                                                                            | Fri | **LAB: HTML Full**                                             | Lab Project: "Complete Static Site" – Wireframe all week's projects into one navigable site.                                               | Optimize for SEO (meta tags across all).                 | `2025-11-21-HTML-Final-Lab-notes.md`: Full site map, commit checklist.                     |
| **CSS Section** (Build on HTML Projects)                                          |     |                                                                |                                                                                                                                            |                                                          |                                                                                            |
| Nov 23                                                                            | Sun | CSS-1: Introduction to CSS                                     | Style "About Me" page: Colors, fonts, selectors.                                                                                           | Apply basic styles to HTML portfolio stub.               | `2025-11-23-CSS-Project1-notes.md`: Selector specificity examples.                         |
| Nov 24                                                                            | Mon | CSS-2: CSS Display, Box Model, Units                           | Box-model layout for contact form (padding/margin).                                                                                        | Refit portfolio tables with rem/em units.                | `2025-11-24-CSS-Projects-notes.md`: Box model diagram in Markdown.                         |
| Nov 25                                                                            | Tue | CSS-3: CSS Flexbox & Media Queries                             | Flexbox nav bar for site.                                                                                                                  | Make portfolio responsive (mobile breakpoints).          | `2025-11-25-CSS-Projects-notes.md`: Flex properties cheatsheet.                            |
| Nov 26                                                                            | Wed | CSS-4: Responsive Layout & Grid                                | Grid-based resume layout.                                                                                                                  | Grid-ify FAQ/blog sections in portfolio.                 | `2025-11-26-CSS-Projects-notes.md`: Grid vs Flex comparison.                               |
| Nov 27                                                                            | Thu | CSS-5: Advanced CSS (Specificity, Inheritance, Positioning)    | Positioned hover effects on product catalog.                                                                                               | Fix inheritance issues in full site styles.              | `2025-11-27-CSS-Projects-notes.md`: !important pitfalls.                                   |
| Nov 28                                                                            | Fri | **LAB: CSS Review**                                            | Lab Project: "Responsive Portfolio v1" – Style entire HTML site with advanced layouts.                                                     | Test cross-browser positioning/media queries.            | `2025-11-28-CSS-Lab-notes.md`: Screenshots of responsive views.                            |
| **JavaScript Section** (Build on CSS/HTML Projects)                               |     |                                                                |                                                                                                                                            |                                                          |                                                                                            |
| Nov 30                                                                            | Sun | JS-1: Intro to JS + JS-2: Code Execution & Hoisting            | JS script for form validation on contact page.                                                                                             | Add hoisting-safe counters to portfolio nav clicks.      | `2025-11-30-JS-Projects-notes.md`: Hoisting demo code.                                     |
| Dec 1                                                                             | Mon | JS-3: Lexical Scope & Closures                                 | Closure-based theme toggle for site.                                                                                                       | Scope-protected data in resume dynamic updates.          | `2025-12-01-JS-Projects-notes.md`: Closure examples.                                       |
| Dec 2                                                                             | Tue | JS-4: Functional Programming                                   | FP refactor: Map/filter skills list in catalog.                                                                                            | Pure functions for blog post filtering.                  | `2025-12-02-JS-Projects-notes.md`: Reduce polyfill snippet.                                |
| Dec 3                                                                             | Wed | JS-5: Async-1 - Callbacks + JS-6: Promises                     | Callback loader for FAQ images; Promise fetch mock data.                                                                                   | Async nav menu population in portfolio.                  | `2025-12-03-JS-Projects-notes.md`: Promise chaining.                                       |
| Dec 4                                                                             | Thu | JS-7: Async/await & Errors + JS-8: Intro to DOM                | Await API call for contact form submit; DOM manip for tables.                                                                              | Error-handled DOM updates in resume.                     | `2025-12-04-JS-Projects-notes.md`: Try/catch patterns.                                     |
| Dec 5                                                                             | Fri | **LAB: JS Async/DOM**                                          | Lab Project: "Interactive Portfolio" – Add async DOM effects across site.                                                                  | Debug event errors in all projects.                      | `2025-12-05-JS-Lab-notes.md`: Performance notes.                                           |
| Dec 7                                                                             | Sun | JS-9: Events + JS-10: Weather App                              | Event handlers for form submits; Start Weather widget.                                                                                     | Event-driven FAQ toggles in portfolio.                   | `2025-12-07-JS-Projects-notes.md`: Bubbling prevention.                                    |
| Dec 8                                                                             | Mon | JS-11-13: Kanban Board (Design, DOM, Advanced)                 | Full Kanban: Structure + drag/drop tasks.                                                                                                  | Integrate Kanban as portfolio "Projects" section.        | `2025-12-08-JS-Projects-notes.md`: localStorage impl.                                      |
| Dec 9                                                                             | Tue | JS-14-15: Event Propagation/Delegation + Machine Coding        | Delegated events in Kanban; Code 1 machine problem (e.g., todo list).                                                                      | Propagate events in Weather/Portfolio.                   | `2025-12-09-JS-Projects-notes.md`: Delegation benefits.                                    |
| Dec 10                                                                            | Wed | JS-16: Debouncing/Throttling + JS-17-18: OOPS (this, Classes)  | Debounced search in Weather; Class for Task in Kanban.                                                                                     | Throttled scroll in portfolio; OOP nav class.            | `2025-12-10-JS-Projects-notes.md`: Class inheritance.                                      |
| Dec 11                                                                            | Thu | JS-19-20: Prototype/Inheritance + Call/Apply/Bind              | Inherit Kanban classes; Bind methods for events.                                                                                           | Prototype extend Weather API handler.                    | `2025-12-11-JS-Projects-notes.md`: Bind polyfill.                                          |
| Dec 12                                                                            | Fri | **LAB: JS OOPS/Projects**                                      | Lab Project: "OOP-ified Apps" – Refactor Kanban/Weather with classes/events.                                                               | Integrate debounced OOPS into full portfolio.            | `2025-12-12-JS-Final-Lab-notes.md`: Refactor diffs.                                        |
| Dec 14                                                                            | Sun | JS-21-23: Polyfills (HOP, Promises) + Deep Copy                | Polyfill map for Kanban data; Deep copy tasks.                                                                                             | Promise.all for multi-fetch in Weather.                  | `2025-12-14-JS-Projects-notes.md`: Memory leak fixes.                                      |
| ... (Continue pattern for remaining JS buffers if needed; merge into React prep). |     |                                                                |                                                                                                                                            |                                                          |                                                                                            |
| **React Section** (Migrate JS/CSS/HTML Projects)                                  |     |                                                                |                                                                                                                                            |                                                          |                                                                                            |
| Dec 15                                                                            | Mon | React-1: Intro + React-2: Build Tools, Lists/Forms/Props/State | React-ify contact form with useState.                                                                                                      | Migrate portfolio nav to React components/props.         | `2025-12-15-React-Projects-notes.md`: JSX vs HTML.                                         |
| Dec 16                                                                            | Tue | React-3: Lifting State & useEffect                             | Lift state in Kanban tasks; Effect for Weather fetch.                                                                                      | useEffect for portfolio dynamic loads.                   | `2025-12-16-React-Projects-notes.md`: Dependency arrays.                                   |
| Dec 17                                                                            | Wed | React-4-5: IMDb (Setup, Routing, Movies/Pagination)            | IMDb router + paginated movies list.                                                                                                       | Route portfolio sections via React Router.               | `2025-12-17-React-Projects-notes.md`: <Link> usage.                                        |
| Dec 18                                                                            | Thu | React-6-7: IMDb (TMDB API, Watchlist, Search/Filter/Context)   | API-integrated watchlist with Context filters.                                                                                             | Context for global theme in migrated apps.               | `2025-12-18-React-Projects-notes.md`: localStorage hooks.                                  |
| Dec 19                                                                            | Fri | **LAB: React State**                                           | Lab Project: "React Portfolio v1" – Lift/integrate states across migrated projects.                                                        | Effect debugging in IMDb/Weather.                        | `2025-12-19-React-Lab-notes.md`: State diagrams.                                           |
| Dec 21                                                                            | Sun | React-8-9: Redux-1/2                                           | Redux store for IMDb movies.                                                                                                               | Redux-ify Kanban state management.                       | `2025-12-21-React-Projects-notes.md`: Reducer patterns.                                    |
| Dec 22                                                                            | Mon | React-10: Testing & Deployment                                 | Jest tests for form components; Deploy IMDb.                                                                                               | Test/deploy portfolio React version.                     | `2025-12-22-React-Projects-notes.md`: Vercel setup.                                        |
| Dec 23                                                                            | Tue | React-11: Perf & Rendering + React-12: Machine Coding          | Memo for list renders in IMDb; Code 2 problems (e.g., counter hook).                                                                       | Optimize Weather re-renders with useCallback.            | `2025-12-23-React-Projects-notes.md`: Perf tips.                                           |
| Dec 24                                                                            | Wed | React-13: Interview Prep                                       | Mock: Explain hooks in Kanban context.                                                                                                     | Prep Qs for portfolio demo.                              | `2025-12-24-React-Projects-notes.md`: Common pitfalls.                                     |
| Dec 25                                                                            | Thu | (Buffer: Review React)                                         | Custom hook for search in IMDb.                                                                                                            | Hook-ify events in full app.                             | `2025-12-25-React-Buffer-notes.md`: Hook rules.                                            |
| Dec 26                                                                            | Fri | **LAB: React Full**                                            | Lab Project: "Optimized IMDb Clone" – Perf tune + integrate all prior projects as components.                                              | Redux testing across apps.                               | `2025-12-26-React-Final-Lab-notes.md`: Deploy links.                                       |
| **MERN Section** (Full-Stack MERN Movie/Theater App)                              |     |                                                                |                                                                                                                                            |                                                          |                                                                                            |
| Dec 28                                                                            | Sun | MERN-1-2: Node/Backend + API/Express/CRUD                      | Express server with CRUD for users/movies.                                                                                                 | Connect React portfolio to basic API.                    | `2025-12-28-MERN-Projects-notes.md`: Routes code.                                          |
| Dec 29                                                                            | Mon | MERN-3-4: MongoDB/CRUD + MVC/Hooks                             | Mongoose models; MVC for theater data.                                                                                                     | Hook middleware for auth in IMDb API calls.              | `2025-12-29-MERN-Projects-notes.md`: Schema design.                                        |
| Dec 30                                                                            | Tue | MERN-5-7: Project (Auth, Routes, Protected)                    | JWT auth + protected movie routes.                                                                                                         | Secure Kanban/Weather with backend persistence.          | `2025-12-30-MERN-Projects-notes.md`: Token flow.                                           |
| Dec 31                                                                            | Wed | **LAB: MERN Full Review**                                      | Lab Project: "MERN Movie App" – Full build (API, seating/payment, WS, deploy). Integrate all prior (e.g., React frontend + Mongo backend). | Security audit + interview prep mocks.                   | `2025-12-31-MERN-Final-Lab-notes.md`: Deployment guide, full roadmap summary.              |

### GitHub Repo Template & Setup Commands

Create a single repo `fullstack-mern-roadmap-2025` for all sections/projects/notes/labs. Structure: Top-level folders per section; subfolders for projects/notes.

#### Repo Structure Template

```
fullstack-mern-roadmap-2025/
├── README.md                 # Schedule, how-to-run, live deploys
├── html/
│   ├── projects/             # Daily project folders (e.g., about-me-page/)
│   │   └── day1-contact-form/  # index.html, assets/
│   └── notes-labs/           # Daily MD files + lab outputs
├── css/
│   ├── projects/             # Styled versions (e.g., responsive-portfolio-v1/)
│   └── notes-labs/
├── javascript/
│   ├── projects/             # Apps (e.g., kanban-board/, weather-app/)
│   └── notes-labs/
├── react/
│   ├── projects/             # (e.g., imdb-clone/) with src/, package.json
│   └── notes-labs/
├── mern/
│   ├── projects/             # Full-stack (e.g., movie-theater-app/ with backend/frontend/)
│   ├── backend/              # Shared (models/, routes/)
│   └── notes-labs/
└── .gitignore                # Node modules, env files
```

#### Bash Commands to Create Repo (Run in Terminal)

1. **Init Local Repo**:

   ```
   mkdir fullstack-mern-roadmap-2025
   cd fullstack-mern-roadmap-2025
   git init
   ```

2. **Create Structure** (One-time; add folders for each section):

   ```
   mkdir -p html/{projects,notes-labs} css/{projects,notes-labs} javascript/{projects,notes-labs} react/{projects,notes-labs} mern/{projects,backend,notes-labs}
   touch README.md .gitignore
   ```

3. **Populate Basics** (Edit README.md manually with schedule; add to .gitignore: `node_modules\n.env\n.DS_Store`):

   ```
   git add .
   git commit -m "Initial: Repo structure for Full Stack Roadmap"
   ```

4. **Connect to GitHub** (Create repo on github.com first, then):

   ```
   git remote add origin https://github.com/yourusername/fullstack-mern-roadmap-2025.git
   git branch -M main
   git push -u origin main
   ```

5. **Daily Workflow** (After projects/notes):
   ```
   git checkout -b [section]-day[date]  # e.g., git checkout -b html-day20251112
   # Add your project files/notes to relevant folder
   git add .
   git commit -m "[Section] Day [Date]: Projects 1-2 + Notes - [Brief desc]"
   git push origin [branch]
   # Merge to main weekly: git checkout main; git merge [branch]; git push
   ```

Use GitHub Pages/Vercel for deploys (add links in README). Commit notes as MD with code blocks (e.g., `html ... `). Ping me with attachments for reviews! 🚀
