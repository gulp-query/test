let build = require('gulp-query');
//let webpack = require('gulp-query-webpack');
let webpack = require('gulp-query-webpack-buble');

build((query) => {
  query.plugins([webpack])
    //.webpack('src/app.js','js/')
    .webpack('src/app.js','js/notapp.js')
});