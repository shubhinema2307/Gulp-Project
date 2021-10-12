var gulp = require('gulp');

gulp.task('hello', function(cd) {
    console.log('Hello Zell');
    cd();
});

var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');