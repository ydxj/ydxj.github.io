// Pre-build guard: Windows/macOS ignore letter case in file names, but the
// Linux CI runner does not. Fail early if an import under src/ points to a
// file whose case differs from what git actually tracks.
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

let tracked;
try {
  tracked = new Set(execSync('git ls-files src', { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean));
} catch {
  console.log('check-import-case: git not available, skipped.');
  process.exit(0);
}

const IMPORT = /(?:import\s[^'"]*|require(?:\.context)?\(\s*)['"](\.{1,2}\/[^'"]+)['"]/g;
const EXTENSIONS = ['', '.js', '/index.js'];
const problems = [];

[...tracked]
  .filter((file) => file.endsWith('.js'))
  .forEach((file) => {
    const source = fs.readFileSync(path.join(root, file), 'utf8');
    for (const [, spec] of source.matchAll(IMPORT)) {
      const base = path.posix.join(path.posix.dirname(file), spec);
      const exact = EXTENSIONS.some((ext) => tracked.has(base + ext));
      const isDir = [...tracked].some((t) => t.startsWith(`${base}/`));
      if (exact || isDir) continue;

      const lower = base.toLowerCase();
      const match = [...tracked].find((t) => EXTENSIONS.some((ext) => t.toLowerCase() === lower + ext));
      problems.push(`${file}: '${spec}' ${match ? `→ git tracks '${match}'` : 'is not tracked by git'}`);
    }
  });

if (problems.length) {
  console.error('Import paths that will break on case-sensitive systems:\n  ' + problems.join('\n  '));
  console.error('\nFix with: git mv -f <tracked name> <name used in the import>');
  process.exit(1);
}
console.log('check-import-case: all imports match tracked file names.');
