'use strict';
const fs = require("fs");

const gulp         = require( "gulp" );
const clear        = require('clear');
const rename       = require( "gulp-rename" );
const flatten      = require('gulp-flatten');
const concat       = require('gulp-concat');

var sass           = require('gulp-sass');
sass.compiler      = require('node-sass');
const sassLint     = require('gulp-sass-lint');
const autoprefixer = require('gulp-autoprefixer');

const wp_content = './http/wp-content';
const paths = {
  themes: {
    scss: ['./build/themes/**/*.scss', '!./build/themes/theme_template/*.scss'],
    php: ['./build/themes/**/*.php', '!./build/themes/theme_template/*.php'],
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
const info = '/*test info*/'+"\n";
function themeScss() {
  // clear();
  let infofile = 'nothing yet';
  return gulp.src(paths.themes.scss)
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
function getThemeInfo(file) {
  console.log('info');
  console.log(file);
}
function themeScssLint() {
  return gulp.src(paths.themes.scss)
  .pipe(sassLint({configFile: './.scss-lint.yml'}))
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
}

gulp.task( "theme:scssLint", themeScssLint );
gulp.task( "theme:scss", gulp.series(themeScssLint, themeScss) );

function themePhp() {
  return gulp.src(paths.themes.php)
  .pipe(gulp.dest(paths.themes.dest));
}
gulp.task( "theme:php", themePhp );

function themeWatch() {
  gulp.watch( paths.themes.scss, { usePolling: true }, themeScss );
  gulp.watch( paths.themes.php, { usePolling: true }, themePhp );
}

gulp.task( "theme", gulp.series(themeScss, themePhp, themeWatch ) );

/********** END THEMES **********/

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

gulp.task( "default", gulp.series(scss, watch ) );

