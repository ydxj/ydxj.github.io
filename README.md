# Omar Zerhouni · Portfolio

Personal portfolio of Omar Zerhouni, full-stack developer from Morocco and WorldSkills Shanghai 2026 competitor in Web Technologies.

**Live site:** [zerhouniomar.me](https://zerhouniomar.me/)

Built with React, React Router and GSAP; deployed to GitHub Pages on every push to `main`.

## Pages

| Route                  | Content                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `/`                    | Hero, tech stack, about, WorldSkills + Credly, gallery preview, media, experience, featured projects, contact |
| `/worldskills/gallery` | Full photo gallery with category filters and lightbox          |
| `/media`               | All videos                                                     |
| `/projects`            | Every project with what / why / role / result                  |

## Editing content

All content lives in `src/data/`. Components only render it.

| File                | What it holds                                   |
| ------------------- | ----------------------------------------------- |
| `site.js`           | Name, role, CV, social links, navigation, EmailJS keys |
| `technologies.js`   | Tech stack strip                                |
| `experience.js`     | Timeline entries (most recent first)            |
| `projects.js`       | Projects (`featured: true` shows on the home page) |
| `media.js`          | Videos (`featured: true` shows on the home page, max 4) |
| `worldskills.js`    | Competition facts, Credly badge, gallery photos |

### Adding WorldSkills photos

1. Put the original photos in `src/assets/Worldskills/` (use a short, descriptive file name such as `medal-ceremony.jpg`).
2. Run `npm run images` (requires Python with Pillow: `pip install pillow`).
   This writes responsive WebP versions to `src/assets/gallery/` and their dimensions to `src/data/gallery-manifest.json`.
3. Add an entry to `photoList` in `src/data/worldskills.js`:

   ```js
   {
     slug: 'medal-ceremony',          // file name, lower-case with dashes
     alt: 'Describe what is in the photo',
     caption: 'Short caption shown in the gallery',
     category: 'Ceremonies',          // one of `categories`
     featured: false,                 // true = part of the home page bento (first 8)
   },
   ```

Processed photos that are not listed still appear at the end of the gallery, so nothing is lost if step 3 is skipped.

### Adding videos

Add an entry to `src/data/media.js`:

```js
{ title: '…', type: 'youtube', id: 'VIDEO_ID', source: 'SNRT', duration: '3:12', context: '…', featured: true }
{ title: '…', type: 'external', url: 'https://…', thumbnail: '…', source: 'Le360' }
{ title: '…', type: 'video', src: importedMp4, thumbnail: importedJpg, source: 'OFPPT' }
```

YouTube players are only created when a visitor presses play.

### Adding a page route

Add the route in `src/App.js` **and** in `scripts/spa-routes.js`, so GitHub Pages serves it directly. Add it to `public/sitemap.xml` too.

## Scripts

```bash
npm start        # dev server on http://localhost:3000
npm run build    # checks import case, builds, copies index.html into each route
npm run images   # regenerate gallery images after adding photos
```

> On Windows, renaming a file by changing only its letter case (e.g. `Logo.png` → `logo.png`) is invisible to git, and the build then fails on GitHub's Linux runner. Use `git mv -f Logo.png logo.png`; `npm run build` checks this before building.
