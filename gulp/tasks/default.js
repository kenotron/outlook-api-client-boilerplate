//******************************************************************************
//* DEFAULT
//******************************************************************************
var gulp 		= require('gulp'),
    runSequence = require("run-sequence");

// Build default
gulp.task("build", function(done) {
	return runSequence(
		"clean",
		"build:source",
		"build:assets",
		done);
});

// No targets default
gulp.task('default', ['watch', 'serve']);