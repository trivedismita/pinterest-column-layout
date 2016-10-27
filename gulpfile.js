'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');

gulp.task('css', function () {
  return gulp.src('src/scss/main.scss')
    .pipe(autoprefixer())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename('main.built.css'))
    .pipe(gulp.dest('dist/styles'))
});

gulp.task('watch', function () {
  	gulp.watch('src/scss/**/*.scss', ['css']);
});

gulp.task('default', ['css']);
