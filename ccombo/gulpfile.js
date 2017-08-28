let build = require('../../gulp-query');
let scss = require('gulp-query-scss');
let js = require('gulp-query-js');

build((query) => {
  query.plugins(scss, js)
    .scss('src/scss/app.scss','dest/css/')
    .js('src/js/app.js','dest/css/')
});