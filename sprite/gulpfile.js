let build = require('gulp-query');
let sprite = require('gulp-query-sprite');

build((query) => {
  query.plugins([sprite])
    .sprite("src/icons/*.png", {
      images: "images/",
      css: "css/"
    },'icons')

    .sprite([
      "src/img/*.jpg",
      "src/icons/*.png"
    ], {
      images: "images/",
      css: "json/"
    }, {
      extension: "json",
      format: "json_texture"
    })
});