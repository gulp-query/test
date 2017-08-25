let build = require('gulp-query');
let scss = require('gulp-query-scss');

build((query) => {
  query.plugins([scss])
    .scss('scss/app.scss','css/','app')
    .scss('scss/app.scss','css/notapp.css')
});