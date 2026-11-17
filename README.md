# Personal Portfolio Website

**Name:** Chukwunonye Ejekam
**Matric number:** 23120111016
**Course:** CSC 419 — Advances in Web, Mobile and Blockchain Development
**Live site:** [paste your live URL here]

A hand-coded, responsive portfolio built with plain HTML, CSS and JavaScript (no framework).

## Pages

| File | What it is |
|---|---|
| `index.html` | Home: About Me, Projects (3), Contact / call to action |
| `breeze.html` | Dedicated project details page for Breeze |
| `projects/breeze/index.html` | The Breeze app itself, so it has a live link |
| `styles.css` | All styling (variables, grid, flexbox, breakpoints) |
| `script.js` | Mobile menu, copy-email button, footer year |
| `assets/img/` | Screenshots |

## How the requirements are met

- **About Me:** `#about` section in `index.html`, with intro text and a facts list.
- **Projects:** `#projects` lists Breeze, BunkShare and this portfolio. Each has a name, description, image, tech stack and link.
- **Call to action:** `#contact` has working Email (`mailto:`), WhatsApp (`wa.me`) and Copy-email buttons.
- **Project details page:** `breeze.html` covers full description, problem, features, screenshots, technologies, and what I learned. It links back to the home page, and the home page links to it.
- **Responsive:** breakpoints at 960px (tablet) and 640px (mobile). Tested at 375px, 768px and 1366px with no horizontal overflow.
- **Semantic HTML:** `header`, `nav`, `main`, `section`, `figure`, `footer`, `dl`, `ol`.

## Code walkthrough

**HTML.** Each section has an `id` (`about`, `projects`, `contact`) so the nav can jump to it. Projects use an ordered list (`<ol>`) because they are numbered. Images live inside `<figure>` with a `<figcaption>`.

**CSS.** `styles.css` is split into numbered sections, listed at the top of the file.
- Section 1 defines colours and fonts once as variables (`--paper`, `--ink`, `--accent`), so the theme can change in one place.
- The design idea is a printed transit timetable: paper background, black ruled lines, mono labels, one yellow accent.
- Layouts use CSS Grid (the About two-column grid, the project rows, the detail chapters) and Flexbox (header, buttons).
- Section 9 holds the media queries that collapse grids into one column on smaller screens.
- `clamp()` makes headings scale smoothly between phone and desktop.

**JavaScript.** `script.js` does three small things:
1. Toggles the `is-open` class on the nav when "Menu" is tapped on phones.
2. Copies the email address to the clipboard with `navigator.clipboard.writeText`.
3. Sets the footer year.

## Deploying

**Option A: Vercel (easiest)**
1. Push this folder to a new GitHub repository.
2. Go to vercel.com, sign in with GitHub, click **Add New → Project** and import the repo.
3. Leave the settings at their defaults (it's a static site) and click **Deploy**.

**Option B: GitHub Pages**
1. Push to GitHub.
2. In the repo, open **Settings → Pages**, set the source to the `main` branch and `/ (root)`, and save.
3. The site appears at `https://YOUR-USERNAME.github.io/REPO-NAME/` after a minute or two.

After deploying, open the live link on your phone to confirm it works.

## Before submitting — checklist

Search the project for `EDIT` and `[Your` to find every placeholder.

- [x] Name and initials
- [x] Matric number
- [ ] About Me paragraphs rewritten in your own words
- [x] Email and WhatsApp number
- [x] BunkShare tech stack (add TypeScript if you used it)
- [x] BunkShare screenshot
- [ ] GitHub repo link in project 03
- [ ] "The problem" and "What I learned" on `breeze.html` checked and personalised
- [ ] Live URL added at the top of this README

## Notes on Breeze

- Breeze needs a Google Maps API key for the checkout map (see the comment near the top of its script). Without a key, everything else works and the map shows an error message.
- Breeze has no backend: data stays in the browser, payments are not processed, and tracking is simulated.
