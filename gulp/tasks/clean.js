//******************************************************************************
//* CLEAN
//******************************************************************************
var gulp    = require("gulp")  ,
    options = require('../options'),
    del     = require('del');

gulp.task('clean', function(done) {
	del([options.output], done);
});
