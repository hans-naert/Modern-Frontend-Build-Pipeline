// build.js
const esbuild = require('esbuild');
const injectManifest = require('workbox-build').injectManifest;
const path = require('path');
const fs = require('fs');

const isWatch = process.argv.includes('--watch');

function copyIndexHtml() {
  const src = path.join(__dirname, 'src', 'index.html');
  const dest = path.join(__dirname, 'dist', 'index.html');
  try {
    fs.copyFileSync(src, dest);
    console.log('Copied index.html to dist');
  } catch (err) {
    console.error('Failed to copy index.html:', err);
  }
}

const buildOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  format: 'esm',
  loader: { '.svg': 'dataurl' },
};

if (isWatch) {
  esbuild.context(buildOptions).then(ctx => {
    ctx.watch();
    console.log('Watching for changes...');
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
} else {
  esbuild.build(buildOptions).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}


// Bundle ServiceWorker, then inject manifest
async function buildServiceWorker() {
  try {
    await esbuild.build({
      entryPoints: ['src/sw.js'],
      bundle: true,
      outfile: 'temp/sw.js',
      format: 'iife',
      platform: 'browser',
      target: ['es2020'],
    });
    copyIndexHtml();
    await injectManifest({
      swSrc: 'temp/sw.js',
      swDest: 'dist/sw.js',
      globDirectory: 'dist',
      globPatterns: ['**/*.{html,js,png,json,css}'],
    });
    console.log('Service worker built and manifest injected.');
  } catch (err) {
    console.error('Service worker build failed:', err);
    process.exit(1);
  }
}

buildServiceWorker();
