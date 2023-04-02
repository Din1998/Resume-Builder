const { src,dest,watch,series } = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyle(){
  return src('./src/uiLib/**/*.scss')
  .pipe(sass())
  .pipe(dest('src/css'))
}

function watchTask(){
  watch(['./src/uiLib/**/*.scss'],buildStyle)
};

exports.default = series(buildStyle,watchTask);