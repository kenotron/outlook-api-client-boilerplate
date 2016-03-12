var gulp       = require('gulp'),
	livereload = require('gulp-livereload'),
	gutil      = require('gulp-util'),
	path       = require('path'),
	spawn      = require('child_process').spawn;

var cp;
var isLaunched = false;

gulp.task('serve', ["build"], function() {
	livereload.listen({livereload: path.resolve(__dirname, '../../node_modules/livereload-js/dist/livereload.js')});

	launchServer();
	
	gulp.watch(['dist/server/server.js'], function() {
		if (cp && isLaunched) {		
			cp.kill('SIGTERM');
			launchServer();
			livereload.reload();
		}
	});
});

function launchServer() {
    cp = spawn(
        process.execPath, 
        ["--debug", "server/server.js"], 
        {
            cwd: 'dist', 
            //env: { "DEBUG": "loopback:security:*"},
        });

	cp.stdout.on("data", function(data) {
		console.log(data.toString().trim());
        isLaunched = true;
	});
	
	cp.stderr.on("data", function(data) {
		console.error(data.toString().trim());
	});
}
