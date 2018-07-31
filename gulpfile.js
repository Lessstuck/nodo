var gulp = require('gulp');
var jshint = require('gulp-jshint');

var jsfiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function() {
    return gulp.src(jsfiles)
        .pipe(jshint());
});

gulp.task('inject', function()  {
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory: './bower_components',
        ignorePath:'../../bower_components'
    }
    
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./src/views'));
});