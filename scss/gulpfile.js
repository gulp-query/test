let build = require('gulp-query');
//let scss = require('gulp-query-scss');
let scss = require('gulp-query-scss-images');

build((query) => {
  query.plugins([scss])
    // .scss('scss/app.scss','css/','app')
    // .scss('scss/app.scss','css/notapp.css')
    .scss('scss/images.scss','css/img.css')
});