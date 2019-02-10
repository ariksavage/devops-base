'use strict';
const fs = require("fs");

const gulp         = require( "gulp" );
const clear        = require('clear');
const rename       = require( "gulp-rename" );
const flatten      = require('gulp-flatten');
const concat       = require('gulp-concat');
const sass         = require('gulp-sass');
  sass.compiler    = require('node-sass');
const sassLint     = require('gulp-sass-lint');
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');

const wp_content = './http/wp-content';
const paths = {
  themes: {
    scss: [
      './build/themes/**/*.scss',
      '!./build/themes/theme_template/**/*'
    ],
    php:  [
      './build/themes/**/*.php',
      '!./build/themes/theme_template/**/*'
    ],
    js:   [
      './build/themes/**/*.js',
      '!./build/themes/theme_template/**/*'
    ],
    img:  [
      './build/themes/**/*.jpg',
      './build/themes/**/*.jpeg',
      './build/themes/**/*.png',
      './build/themes/**/*.gif',
      './build/themes/**/*.svg',
      '!./build/themes/theme_template/**/*'
    ],
    dest: wp_content+'/themes'
  },
  scss: {
    src: './build/**/*.scss',
    dest: './http/css'
  }
}

/**
* WORDPRESS
**/

/********** THEMES **********/

// SCSS
const info = '/*test info*/'+"\n";
function themeScss() {
  // clear();
  let infofile = 'nothing yet';
  return gulp
  .src(paths.themes.scss)
  .pipe(rename(function(file){
    file.dirname = file.dirname.split('/')[0];
  }))
  .pipe(sassLint({configFile: './.scss-lint.yml'}))
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
  .pipe(sass({
    outputStyle: 'compact'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest(paths.themes.dest));
}

gulp.task( "theme:scss", gulp.series(themeScss) );

// PHP
function themePhp() {
  return gulp
  .src(paths.themes.php)
  .pipe(gulp.dest(paths.themes.dest));
}
gulp.task( "theme:php", themePhp );

// JS
function themeJs() {
  return gulp
  .src(paths.themes.js)
  .pipe(rename(function(file){
    file.dirname = file.dirname.split('/')[0]+'/js';
  }))
  .pipe(gulp.dest(paths.themes.dest));
}
gulp.task( "theme:js", themeJs );

// Images
function themeImages() {
  return gulp
  .src(paths.themes.img)
  .pipe(rename(function(file){
    if (file.basename != 'screenshot'){
      file.dirname = file.dirname.split('/')[0]+'/img';
    }
  }))
  .pipe(imagemin())
  .pipe(gulp.dest(paths.themes.dest));
}
gulp.task( "theme:images", themeImages );

function themeWatch() {
  gulp.watch( paths.themes.scss, { usePolling: true }, themeScss );
  gulp.watch( paths.themes.php,  { usePolling: true }, themePhp );
  gulp.watch( paths.themes.js,   { usePolling: true }, themeJs );
  gulp.watch( paths.themes.img,  { usePolling: true }, themeImages );
}

gulp.task( "theme", gulp.series(themeScss, themePhp, themeJs, themeImages, themeWatch ) );

/********** END THEMES **********/
gulp.task( "wordpress", gulp.series("theme"));
/**
* SASS
**/
function scss() {
  clear();
  return gulp.src(paths.scss.src)
  .pipe(flatten())
  .pipe(sassLint({configFile: './.scss-lint.yml'}))
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
  .pipe(sass({
    outputStyle: 'compact'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest(paths.theme));
}

function scssLint() {
  return gulp.src(paths.scss.source)
  .pipe(sassLint({configFile: './.scss-lint.yml'}))
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
}

gulp.task( "scss:lint", scssLint );
gulp.task( "scss", gulp.series(scssLint, scss) );

/**
* META
**/
function watch() {
  gulp.watch( paths.scss.src, { usePolling: true }, scss );
}

gulp.task( "default", gulp.series('wordpress' ) );

