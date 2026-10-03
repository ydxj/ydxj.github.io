// Post-build step for GitHub Pages (static hosting, no rewrites):
// copy index.html into each client-side route so deep links load with a
// 200 status, and into 404.html as the fallback for unknown paths.
const fs = require('fs');
const path = require('path');

const ROUTES = ['projects', 'media', 'worldskills/gallery'];
const build = path.join(__dirname, '..', 'build');
const index = path.join(build, 'index.html');

ROUTES.forEach((route) => {
  const dir = path.join(build, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(index, path.join(dir, 'index.html'));
});
fs.copyFileSync(index, path.join(build, '404.html'));

console.log(`SPA routes written: /${ROUTES.join(', /')}, 404.html`);
