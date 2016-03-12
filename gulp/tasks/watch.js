//******************************************************************************
//* WATCH
//******************************************************************************
var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    path    = require('path'),
	options = require('../options'),
	fs      = require('fs');

// Watch product code
gulp.task('watch', function() {
	// watch for source changes
	gulp.watch(
		['src/server/**/*.ts', 'src/server/**/*.json'],
		['build:source'])
	.on('change', logChangedFile);
	
	gulp.watch(
		['public/**/*'],
		['build:assets'])
	.on('change', logChangedFile);
});

function logChangedFile(file) {
	gutil.log("Detected change in: " + file.path);
}
