'use strict';
const gulp = require('gulp');

// list packages: npm list -g --depth=0

const srcDir = './build';
const destDir = './web';

const options = {
  style: {
    task: 'Styles',
    src: `${srcDir}/style/**/*.{scss,sass}`,
    dest: `${destDir}/style`
  },
  fonts: {
    task: 'Fonts',
    src:  `${srcDir}/fonts/**/*.{eot,otf,ttf,woff,woff2,svg}`,
    dest: `${destDir}/fonts`
  },
  scripts: {
    task: 'Scripts',
    src: [`${srcDir}/scripts/**/*.js`,`!${srcDir}/scripts/library/*.js`],
    librarySrc: `${srcDir}/scripts/library/*.js`,
    libraryDest: `${destDir}/scripts/library`,
    dest: `${destDir}/scripts`
  },
  images: {
    task: 'Images',
    src: `${srcDir}/images/**/*.{png,jpg,jpeg,svg}`,
    dest: `${destDir}/img`
  },
  static: {
    task: 'Static',
    src: `${srcDir}/static/**/*.{php,html,md,htaccess,txt}`,
    dest: `${destDir}`
  },
  icons: {
    task: 'Icons',
    src: `${srcDir}/icons/*.svg`,
    dest: `${destDir}/fonts`,
  }
}
/*******************************************************************************
***** Creates Style and Watch: Style tasks
*******************************************************************************/
require('./gulp/gulp_tasks/sass.task')(gulp, options.style);

/*******************************************************************************
***** Creates Fonts and Watch: Fonts tasks
*******************************************************************************/
let styleDest = options.style.src;
styleDest = styleDest.split('/');
styleDest.splice(-1,1);
styleDest = styleDest.join('/');
styleDest = styleDest.replace('/**','');
options.fonts.styleDest = `${styleDest}/globals`;
options.fonts.relPath = '/fonts';
require('./gulp/gulp_tasks/fonts.task')(gulp, options.fonts);

/*******************************************************************************
***** Icons
*******************************************************************************/
options.icons.fontName = 'Base Icons';
options.icons.formats = ['ttf', 'eot', 'woff', 'woff2', 'svg'];
options.icons.relPath = options.fonts.relPath;
options.icons.styleDest = options.fonts.styleDest;
options.icons.relPath = options.fonts.relPath;
require('./gulp/gulp_tasks/icon-font.task')(gulp, options.icons);

/*******************************************************************************
***** Creates Images and Watch: Images tasks
*******************************************************************************/
require('./gulp/gulp_tasks/images.task')(gulp, options.images);

/*******************************************************************************
***** Scripts
*******************************************************************************/
options.scripts.fileName = 'app.js';
options.scripts.styleDest = styleDest;
function addNodeModuleJS(options, src) {
  options.scripts.librarySrc.push('./node_modules/something/something.min.js');
  return options;
}
// options.scripts = addNodeModuleJS(options.scripts, 'module_name/module_name.min.js');
require('./gulp/gulp_tasks/javascript.task')(gulp, options.scripts);

/**
* Static Files
**/
require('./gulp/gulp_tasks/static.task')(gulp, options.static);

gulp.task('watch', gulp.parallel('Watch: Styles', 'Watch: Fonts', 'Watch: Icons', 'Watch: Images', 'Watch: Scripts', 'Watch: Static'));
gulp.task('build', gulp.series('Styles', 'Fonts', 'Icons', 'Images', 'Scripts', 'Static'));
gulp.task('default', gulp.series('build', 'watch'));
