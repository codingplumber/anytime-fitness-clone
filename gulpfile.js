var gulp = require('gulp')
, sourcemaps = require('gulp-sourcemaps')
, sass = require('gulp-sass')
, concat = require('gulp-concat')
, CacheBuster = require('gulp-cachebust')
, print = require('gulp-print')
, babel = require('gulp-babel');
// , uglify = require('gulp-uglify');

var cachebust = new CacheBuster();

gulp.task('build-css', function() {
  return gulp.src(['./styles/*.scss', './styles/*.css'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cachebust.resources())
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'));
})

gulp.task('build-images', function() {
  return gulp.src('./images/**/*')
    .pipe(gulp.dest('./dist/images'))
})

gulp.task('build-views', function() {
  return gulp.src('./views/*.html')
    .pipe(gulp.dest('./dist/views'))
})

gulp.task('build-js', function() {
   return gulp.src(['js/app.js','js/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(print())
      .pipe(babel({ presets: ['es2015'] }))
      .pipe(concat('bundle.js'))
      //.pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task('build', ['build-css', 'build-js', 'build-images', 'build-views'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    return gulp.watch(['./index.html', './styles/*.*css', './js/**/*.js', './views/*.html', './images/**/*'], ['build']);
});
