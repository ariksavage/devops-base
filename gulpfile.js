'use strict';
 
const gulp         = require( "gulp" );
const clear        = require('clear');
const rename       = require( "gulp-rename" );
const flatten      = require('gulp-flatten');
const concat       = require('gulp-concat');

var sass           = require('gulp-sass');
sass.compiler      = require('node-sass');
const sassLint     = require('gulp-sass-lint');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
  scss: {
    src: './build/**/*.scss'
    dest: './http/css'
  },
}

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

