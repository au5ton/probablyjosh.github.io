var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass']);

gulp.task('watch', function() {
	gulp.watch('stylesheets/style.scss', ['sass'])
})

gulp.task('prefix', function() {
	return gulp.src('stylesheets/style.css')
		.pipe(autoprefixer({
			browsers: ['last 12 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('stylesheets'))
})

gulp.task('sass', function() {
	return gulp.src('stylesheets/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('stylesheets'))
});
