let build = require('gulp-query');
let rollup = require('gulp-query-rollup');

build((query) => {
  query.plugins([rollup])
    .rollup('src/app.js','js/')
    //.rollup('src/app.js','js/notapp.js')
});