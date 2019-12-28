const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-jsmin');

gulp.task('styles', () => {
      return gulp.src('src/sass/*.sass')
            .pipe(sass())
            .pipe(minifyCSS())
            .pipe(gulp.dest('dist/css/'));
});

gulp.task('scripts', () => {
      return gulp.src('src/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist/js/'));
});

gulp.task('images', () => {
      return gulp.src('src/img/*')
            .pipe(gulp.dest('dist/img/'));
});

gulp.task('build', gulp.series('images','styles', 'scripts'));