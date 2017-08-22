let build = require('gulp-query');
let webpack = require('gulp-query-webpack');

build((query) => {
  query.plugins([webpack])
    //.webpack('src/app.js','js/')
    .webpack('src/app.js','js/notapp.js')
});