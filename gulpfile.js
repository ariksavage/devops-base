'use strict';
 
const gulp         = require('gulp');
const clear        = require('clear');
const rename       = require('gulp-rename');
const flatten      = require('gulp-flatten');
const concat       = require('gulp-concat');
const imagemin     = require('gulp-imagemin');
const sass         = require('gulp-sass');
    sass.compiler  = require('node-sass');
const sassLint     = require('gulp-sass-lint');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  scss: {
    source: './build/**/*.scss',
    destination: './http/css'
  },
  js: {
    source: './build/**/*.scss',
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
      '!./build/**/fonts/**/*.svg'
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
      './build/**/fonts/**/*.svg'
    ],
    destination: './http/fonts/'
  },
  text: {
    source: [
      './build/**/*.txt',
      './build/**/*.md'
    ],
    destination: './http/docs'
  }
}

/*******************************************************************************
* SASS
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

gulp.task('scss', gulp.series(scss));

/*******************************************************************************
* JAVASCRIPT
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
*******************************************************************************/
function text() {
  return gulp
  .src(paths.text.source)
  .pipe(gulp.dest(paths.text.destination));
}
gulp.task('text', text);

/*******************************************************************************
* META
*******************************************************************************/
function watch() {
  gulp.watch(paths.scss.source,    { usePolling: true }, scss);
  gulp.watch(paths.js.source,      { usePolling: true }, js);
  gulp.watch(paths.images.source,  { usePolling: true }, images);
  gulp.watch(paths.fonts.source,   { usePolling: true }, fonts);
  gulp.watch(paths.text.source,    { usePolling: true }, text);
}

gulp.task('default', gulp.series(scss, js, images, fonts, text, watch));
