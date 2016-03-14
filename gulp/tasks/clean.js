//******************************************************************************
//* CLEAN
//******************************************************************************
var gulp    = require("gulp"),
    options = require('../options'),
    rimraf  = require('rimraf');

gulp.task('clean', function(done) {
	rimraf(options.output, done);
});
