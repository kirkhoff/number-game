/**
 * Created by kpham on 8/30/16.
 */
var gulp = require('gulp'),
    connect = require ('gulp-connect'),
    sass = require ('gulp-sass'),
    watch = require ('gulp-watch');

gulp.task('default', [
    'sass',
    'connect',
    'watch'
]);

//Sass task
gulp.task('sass', function() {
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

//Connect Task
gulp.task('connect', function() {
    connect.server();
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('sass/*.scss',['sass']);
});
