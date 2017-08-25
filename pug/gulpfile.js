let build = require('gulp-query');
let pug = require('gulp-query-pug');

build((query) => {
  query.plugins([pug])
    .pug('src/*.pug','dest/')
});