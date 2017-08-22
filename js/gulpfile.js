let build = require('gulp-query');
let js = require('gulp-query-js');

build((query) => {
  query.plugins([js])
    .js('src/app.js','js/')
    .js('src/app.js','js/notapp.js')
});