let build = require('gulp-query');
let copy = require('gulp-query-copy');

build((query) => {
  query.plugins([copy])
    .copy(['src/1.css','src/2.css'],'dest/12.css','concat')
    .copy(['src/1.css','src/2.css'],'dest/','copy')
});