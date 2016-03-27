var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('watch', function() {
	gulp.watch('stylesheets/style.scss', ['sass'])
})

gulp.task('sass', function() {
	return gulp.src('stylesheets/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('stylesheets'))
});
