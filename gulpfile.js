var gulp = require('gulp');

var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var livereload = require('gulp-livereload');

// Compile Sass task
gulp.task('sass', function() {
  return gulp.src('site/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('site/css'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch('site/scss/*.scss', ['sass']);
  gulp.watch('site/js/**', ['styles']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['site/css/**']).on('change', livereload.changed);
  gulp.watch(['site/js/**']).on('change', livereload.changed);
});

// Minify index
gulp.task('html', function() {
  gulp.src('site/index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return browserify('./site/js/main.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('site/js'));
});

// Styles build task, concatenates all the files
gulp.task('styles', function() {
  gulp.src('site/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('site/css'));
});



// Default task
gulp.task('default', ['scripts', 'sass', 'watch']);
