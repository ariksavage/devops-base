(()=>{
  'use strict';
 
const gulp           = require('gulp');
const clear          = require('clear');
const rename         = require('gulp-rename');
const flatten        = require('gulp-flatten');
const concat         = require('gulp-concat');
const imagemin       = require('gulp-imagemin');
const sass           = require('gulp-sass');
      sass.compiler  = require('node-sass');
const sassLint       = require('gulp-sass-lint');
const autoprefixer   = require('gulp-autoprefixer');

const paths = {
  blocks: {
    source: [
      './build/blocks/**/dist/*',
      './build/blocks/**/src/init.php',
      // './build/blocks/**/src/blocks.js',
      './build/blocks/**/plugin.php',
      './build/blocks/**/src/README.md',
      '!./build/blocks/**/node_modules/',
      '!./build/blocks/**/node_modules/**/*'
    ],
    destination: './http/wp-content/plugins/'
  },

  root: {
    source: './build/root/**/*.*',
    destination: './http'
  },
  scss: {
    source: [
      './build/**/*.scss',
      './build/**/*.sass',
      '!./build/root/**/*'
    ],
    destination: './http/css'
  },
  js: {
    source: [
      './build/**/*.js',
      '!./build/root/**/*'
    ],
    destination: './http/js'
  },
  images: {
    source: [
      './build/**/*.jpg',
      './build/**/*.jpeg',
      './build/**/*.png',
      './build/**/*.gif',
      './build/**/*.svg',
      '!./build/**/font/**/*.svg',
      '!./build/**/fonts/**/*.svg',
      '!./build/root/**/*'
    ],
    destination: 'http/img/'
  },
  fonts: {
    source: [
      './build/**/*.eot',
      './build/**/*.ttf',
      './build/**/*.otf',
      './build/**/*.eot',
      './build/**/*.woff',
      './build/**/*.woff2',
      './build/**/font/**/*.svg',
      './build/**/fonts/**/*.svg',
      '!./build/root/**/*'
    ],
    destination: './http/fonts/'
  },
  text: {
    source: [
      './build/**/*.txt',
      './build/**/*.md',
      '!./build/root/**/*'
    ],
    destination: './http/docs'
  }
}
/*******************************************************************************
* WORDPRESS BLOCKS
*
*******************************************************************************/

function WPblocks(){
  return gulp.src(paths.blocks.source)
  .pipe(gulp.dest(paths.blocks.destination));
}
gulp.task('wp:blocks', WPblocks);
/*******************************************************************************
* SASS
* Compile and lint SCSS
*******************************************************************************/
function scss() {
  clear();
  return gulp.src(paths.scss.source)
  .pipe(flatten())
  .pipe(sassLint({configFile: './.scss-lint.yml'}))
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
  .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: true
  }))
  .pipe(gulp.dest(paths.scss.destination));
}

gulp.task('scss', scss);

/*******************************************************************************
* JAVASCRIPT
* Organize JavaScript. To do: lint and uglify
*******************************************************************************/
function js() {
  return gulp
  .src(paths.js.source)
  .pipe(flatten())
  .pipe(gulp.dest(paths.js.destination));
}
gulp.task('js', js);

/*******************************************************************************
* IMAGES
* Compress and organize images
*******************************************************************************/
function images() {
  return gulp
  .src(paths.images.source)
  .pipe(flatten())
  .pipe(imagemin())
  .pipe(gulp.dest(paths.images.destination));
}
gulp.task('images', images);

/*******************************************************************************
* FONTS
* Rename and organize fonts. Todo: generate webfonts, iconfont
*******************************************************************************/
function fonts() {
  return gulp
  .src(paths.fonts.source)
  .pipe(rename(function(font) {
    font.dirname =  font.dirname
                      .replace(' ','_')
                      .toLowerCase();
    font.basename = font.basename
                      .replace(' - ','-')
                      .replace(' ','_')
                      .toLowerCase();
  }))
  .pipe(gulp.dest(paths.fonts.destination));
}
gulp.task('fonts', fonts );

/*******************************************************************************
* TEXT
* Move text (txt, md) files into place as needed.
*******************************************************************************/
function text() {
  return gulp
  .src(paths.text.source)
  .pipe(gulp.dest(paths.text.destination));
}
gulp.task('text', text);

/*******************************************************************************
* ROOT
* Move any locally developed root files (i.e. robots.txt) into place.
*******************************************************************************/

function root() {
  return gulp.src(paths.root.source)
  .pipe(gulp.dest(paths.root.destination))
}

gulp.task('root', root);

/*******************************************************************************
* META
*******************************************************************************/
function watch() {
  // gulp.watch(paths.scss.source,    { usePolling: true }, scss);
  // gulp.watch(paths.js.source,      { usePolling: true }, js);
  // gulp.watch(paths.images.source,  { usePolling: true }, images);
  // gulp.watch(paths.fonts.source,   { usePolling: true }, fonts);
  // gulp.watch(paths.text.source,    { usePolling: true }, text);
  // gulp.watch(paths.root.source,    { usePolling: true }, root);
}

function WPwatch(){
  gulp.watch(paths.blocks.source,    { usePolling: true }, WPblocks);
}
gulp.task('wordpress', gulp.series(WPblocks, WPwatch));
gulp.task('default', gulp.series(scss, js, images, fonts, text, root, watch));
})();
