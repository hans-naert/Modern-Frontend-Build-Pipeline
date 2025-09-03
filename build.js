// build.js
const esbuild = require('esbuild');
const babel = require('esbuild-plugin-babel').default;

const isWatch = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: 'dist/bundle.js',
  format: 'esm',
  loader: { '.svg': 'dataurl' },
  publicPath: 'dist',
  plugins: [
    babel({
      filter: /\.([jt]sx?)$/, // Only process .js, .ts, .jsx, .tsx files
      config: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript"
        ]
      }
    })
  ],
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