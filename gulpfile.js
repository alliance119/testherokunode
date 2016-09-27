'use strict';

var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    exec = require('gulp-exec'),
    rimraf = require('rimraf');

gulp.task('js:build', function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('html:build', function () {
    gulp.src('src/index.html') 
        .pipe(rigger()) 
        .pipe(gulp.dest('build')); 
    });

gulp.task('serve', function () {
    var server = gls.new('server.js');
    server.start();
});

gulp.task('clean', function (cb) {
    rimraf('build/*', cb);
    });

gulp.task('build', ['clean','js:build','html:build']);
gulp.task('default', ['build','serve']);
