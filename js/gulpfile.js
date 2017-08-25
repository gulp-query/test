let build = require('gulp-query');
//let js = require('gulp-query-js');
let js = require('gulp-query-js-buble');

build((query) => {
  query.plugins([js])
    .js('src/app.js','js/')
    .js('src/app.js','js/notapp.js')
});