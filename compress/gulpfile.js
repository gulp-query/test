let build = require('gulp-query');
let compress = require('gulp-query-compress');

build((query) => {
  query.plugins([compress])
    .compress('src/icons/*.png','dest/')
    .compress({from:'src/img/*',to: 'img/'},'dest/')
});