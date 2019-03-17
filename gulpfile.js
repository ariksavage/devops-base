<<<<<<< HEAD
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
const eslint       = require('gulp-eslint');
const minify       = require('gulp-minify');
const clean        = require('gulp-clean');

const wp_content = './web/wp-content';

const WordPress = {
  themes: {
    source: {
      scss: [
        './build/themes/**/*.scss',
        './build/themes/**/*.sass',
        '!./build/themes/theme_template/**/*'
      ],
      js: [
        './build/themes/**/*.js',
        '!./build/themes/theme_template/**/*',
      ],
      php: [
        './build/themes/**/*.php',
        '!./build/themes/theme_template/**/*',
      ],
      fonts: [
        './build/themes/**/fonts/**/*.ttf',
        './build/themes/**/fonts/**/*.otf',
        './build/themes/**/fonts/**/*.eot',
        './build/themes/**/fonts/**/*.woff',
        './build/themes/**/fonts/**/*.woff2',
        './build/themes/**/fonts/**/*.svg',
        '!./build/themes/theme_template/**/*'
      ],
      images: [
        './build/themes/**/*.svg',
        './build/themes/**/*.png',
        './build/themes/**/*.gif',
        './build/themes/**/*.jpg',
        './build/themes/**/*.jpeg',
        './build/themes/**/*.webd',
        '!./build/themes/**/fonts/**/*',
        '!./build/themes/theme_template/**/*'
      ]
    },
    destination: wp_content+'/themes'
  },
  plugins: {
    source: {
      scss: [
        './build/plugins/**/*.scss',
        './build/plugins/**/*.sass',
        '!./build/plugins/plugin_template/**/*'
      ],
      js: [
        './build/plugins/**/*.js',
        '!./build/plugins/plugin_template/**/*',
      ],
      php: [
        './build/plugins/**/*.php',
        '!./build/plugins/plugin_template/**/*',
      ],
      fonts: [
        './build/plugins/**/fonts/**/*.ttf',
        './build/plugins/**/fonts/**/*.otf',
        './build/plugins/**/fonts/**/*.eot',
        './build/plugins/**/fonts/**/*.woff',
        './build/plugins/**/fonts/**/*.woff2',
        './build/plugins/**/fonts/**/*.svg',
        '!./build/plugins/plugin_template/**/*'
      ],
      images: [
        './build/plugins/**/*.svg',
        './build/plugins/**/*.png',
        './build/plugins/**/*.gif',
        './build/plugins/**/*.jpg',
        './build/plugins/**/*.jpeg',
        './build/plugins/**/*.webd',
        '!./build/plugins/**/fonts/**/*',
        '!./build/plugins/plugin_template/**/*'
      ]
    },
    destination: wp_content+'/plugins'
  },
  blocks: {
    source: [
      '!./build/blocks/**/node_modules/*',
       './build/blocks/**/*.css',
       './build/blocks/**/*.js',
       './build/blocks/**/*.php',
       './build/blocks/**/*.md'
    ]
  }
}
// Universal SCSS
function scssPipeLine(inputStream) {
  return inputStream
=======
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
>>>>>>> f33ac2d9ed9c7752eedd46a75fc278757e2ca26e
  .pipe(sassLint({configFile: './.scss-lint.yml'}))
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
  .pipe(sass({
    outputStyle: 'compressed'
  }).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
<<<<<<< HEAD
    cascade: false
  }));
}
function jsPipeLine(inputStream){
  return inputStream
  // eslint() attaches the lint output to the "eslint" property
  // of the file object so it can be used by other modules.
  .pipe(eslint('.eslintrc.yml'))
  // eslint.format() outputs the lint results to the console.
  // Alternatively use eslint.formatEach() (see Docs).
  .pipe(eslint.format())
  // To have the process exit with an error code (1) on
  // lint error, return the stream and pipe to failAfterError last.
  // .pipe(eslint.failAfterError())
  .pipe(minify())
  .pipe(rename(file => {
    file.basename = file.basename.replace('-min','.min');
  }))
}
function imagePipeLine(inputStream) {
  return inputStream
  .pipe(imagemin())
}
function phpPipeLine(inputStream) {
  return inputStream;
}
function fontsPipeLine(inputStream) {
  return inputStream
  .pipe(rename(file => {
    file.basename = file.basename.toLowerCase().replace(/ *- */,'-').replace(/\s/, '-');
    file.dirname = file.dirname.toLowerCase().replace(/ *- */,'-').replace(/\s/, '-');
  }))
}

/******************************************************************************
** BLOCKS
******************************************************************************/
WordPress.blocks.all = function() {
  return gulp.src(WordPress.blocks.source)
  .pipe(gulp.dest(WordPress.plugins.destination));
}
Object.assign(WordPress.blocks.all, {displayName: "WordPress Blocks"})
gulp.task( WordPress.blocks.all );

/******************************************************************************
** PLUGINS
******************************************************************************/

  /** Plugin SCSS *****************************************/
  WordPress.plugins.scss = function() {
    return scssPipeLine(gulp.src(WordPress.plugins.source.scss))
    // move to root of Plugin
    .pipe(rename(function (path) {
      path.dirname = path.dirname.split('/')[0];
    }))
    .pipe(gulp.dest(WordPress.plugins.destination));
  }
  Object.assign(WordPress.plugins.scss, {displayName: "WordPress Plugin SCSS"})
  gulp.task( WordPress.plugins.scss );
  /** Plugin JAVASCRIPT ***********************************/
  WordPress.plugins.js = function() {
    return jsPipeLine(gulp.src(WordPress.plugins.source.js))
    // move to root of Plugin
    .pipe(rename(function (path) {
      path.dirname = path.dirname.split('/')[0]+'/scripts';
    }))
    .pipe(gulp.dest(WordPress.plugins.destination));
  }
  Object.assign(WordPress.plugins.js, {displayName: "WordPress Plugin JavaScript"})
  gulp.task( WordPress.plugins.js );
  /** Plugin PHP ******************************************/
  WordPress.plugins.php = function(){
    return phpPipeLine(gulp.src(WordPress.plugins.source.php))
    .pipe(gulp.dest(WordPress.plugins.destination));
  }
  Object.assign(WordPress.plugins.php, {displayName: "WordPress Plugin PHP"})
  gulp.task( WordPress.plugins.php );
  /** Plugin FONTS ****************************************/
  WordPress.plugins.fonts = function() {
    return fontsPipeLine(gulp.src(WordPress.plugins.source.fonts))
    .pipe(gulp.dest(WordPress.plugins.destination));
  }
  Object.assign(WordPress.plugins.fonts, {displayName: "WordPress Plugin Fonts"})
  gulp.task( WordPress.plugins.fonts );
  /** Plugin IMAGES ***************************************/
  WordPress.plugins.images = function() {
    return imagePipeLine(gulp.src(WordPress.plugins.source.images))
    // flatten but screenshot
    .pipe(rename(function (file) {
      let dir = file.dirname.split('/');
      dir.splice(1, 0, "img");
      file.dirname = dir.join('/');
    }))
    .pipe(gulp.dest(WordPress.plugins.destination));
  }
  Object.assign(WordPress.plugins.images, {displayName: "WordPress Plugin Images"})
  gulp.task( WordPress.plugins.images );

  gulp.task( "WordPress Plugins", gulp.series( WordPress.plugins.scss, WordPress.plugins.js, WordPress.plugins.fonts, WordPress.plugins.php, WordPress.plugins.images));


/******************************************************************************
** THEMES
******************************************************************************/

  /** THEME SCSS *****************************************/
  WordPress.themes.scss = function() {
    return scssPipeLine(gulp.src(WordPress.themes.source.scss))
    // move to root of theme
    .pipe(rename(function (path) {
      path.dirname = path.dirname.split('/')[0];
    }))
    .pipe(gulp.dest(WordPress.themes.destination));
  }
  Object.assign(WordPress.themes.scss, {displayName: "WordPress Theme SCSS"})
  gulp.task( WordPress.themes.scss );
  /** THEME JAVASCRIPT ***********************************/
  WordPress.themes.js = function() {
    return jsPipeLine(gulp.src(WordPress.themes.source.js))
    // move to root of theme
    .pipe(rename(function (path) {
      path.dirname = path.dirname.split('/')[0]+'/scripts';
    }))
    .pipe(gulp.dest(WordPress.themes.destination));
  }
  Object.assign(WordPress.themes.js, {displayName: "WordPress Theme JavaScript"})
  gulp.task( WordPress.themes.js );
  /** THEME PHP ******************************************/
  WordPress.themes.php = function(){
    return phpPipeLine(gulp.src(WordPress.themes.source.php))
    .pipe(gulp.dest(WordPress.themes.destination));
  }
  Object.assign(WordPress.themes.php, {displayName: "WordPress Theme PHP"})
  gulp.task( WordPress.themes.php );
  /** THEME FONTS ****************************************/
  WordPress.themes.fonts = function() {
    return fontsPipeLine(gulp.src(WordPress.themes.source.fonts))
    .pipe(gulp.dest(WordPress.themes.destination));
  }
  Object.assign(WordPress.themes.fonts, {displayName: "WordPress Theme Fonts"})
  gulp.task( WordPress.themes.fonts );
  /** THEME IMAGES ***************************************/
  WordPress.themes.images = function() {
    return imagePipeLine(gulp.src(WordPress.themes.source.images))
    // flatten but screenshot
    .pipe(rename(function (file) {
      if (file.basename != 'screenshot'){
        let dir = file.dirname.split('/');
        dir.splice(1, 0, "img");
        file.dirname = dir.join('/');
      }
    }))
    .pipe(gulp.dest(WordPress.themes.destination));
  }
  Object.assign(WordPress.themes.images, {displayName: "WordPress Theme Images"})
  gulp.task( WordPress.themes.images );

  gulp.task( "WordPress Theme", gulp.series( WordPress.themes.scss, WordPress.themes.js, WordPress.themes.fonts, WordPress.themes.php, WordPress.themes.images));


gulp.task( "WordPress", gulp.series( "WordPress Plugins", "WordPress Theme", "WordPress Blocks" ));

function Watch() {
/* THEME Tasks *******************************************/
  gulp.watch( WordPress.themes.source.scss,   { usePolling: true }, WordPress.themes.scss );
  gulp.watch( WordPress.themes.source.js,     { usePolling: true }, WordPress.themes.js );
  gulp.watch( WordPress.themes.source.fonts,  { usePolling: true }, WordPress.themes.fonts );
  gulp.watch( WordPress.themes.source.php,    { usePolling: true }, WordPress.themes.php );
  gulp.watch( WordPress.themes.source.images, { usePolling: true }, WordPress.themes.images );
/* PLUGIN Tasks *******************************************/
  gulp.watch( WordPress.plugins.source.scss,   { usePolling: true }, WordPress.plugins.scss );
  gulp.watch( WordPress.plugins.source.js,     { usePolling: true }, WordPress.plugins.js );
  gulp.watch( WordPress.plugins.source.fonts,  { usePolling: true }, WordPress.plugins.fonts );
  gulp.watch( WordPress.plugins.source.php,    { usePolling: true }, WordPress.plugins.php );
  gulp.watch( WordPress.plugins.source.images, { usePolling: true }, WordPress.plugins.images );
/* BLOCKS Tasks *******************************************/
  gulp.watch( WordPress.blocks.source,         { usePolling: true }, WordPress.blocks );
}
gulp.task( "Watch", Watch );
gulp.task( "default", gulp.series( "WordPress", "Watch" ) );

gulp.task( "build", gulp.series( "WordPress" ) );
=======
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
>>>>>>> f33ac2d9ed9c7752eedd46a75fc278757e2ca26e
