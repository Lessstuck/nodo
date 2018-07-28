var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsfiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function() {
    return gulp.src(jsfiles)
        .pipe(jshint());
})