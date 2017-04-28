var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var dest = require('gulp-dest');
 
gulp.task('default', ['css']);

gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(uglifycss())
    .pipe(dest('dist', {ext: '.min.css'}))
    .pipe(gulp.dest('./'));
});