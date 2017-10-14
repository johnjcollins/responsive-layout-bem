var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log('Hooray, I created a gulp task!');
});

gulp.task('html', function() {
  console.log('Imagime something useful being done to my HTML here.');
});

gulp.task('styles', function() {
  console.log('Imagime SASS or PostCSS tasks running here.');
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
