// Inside of build.js:
const { injectManifest } = require('workbox-build');

const swSrc = 'src/sw.js';
const swDest = 'dist/sw.js';
injectManifest({
  swSrc,
  swDest,
  globPatterns: ['*.html', '*.js', '*.svg'],
  globDirectory: 'dist',
  // Other configuration options...
}).then(({ count, size }) => {
  console.log(
    `Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`
  );
});
