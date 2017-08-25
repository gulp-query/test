let build = require('gulp-query');
let styles = require('gulp-query-styles');

build((query) => {
  query.plugins([styles])
    .styles(['src/1.css','src/2.css'],'dest/12.css','concat')
    .styles(['src/1.css','src/2.css'],'dest/','copy')
});