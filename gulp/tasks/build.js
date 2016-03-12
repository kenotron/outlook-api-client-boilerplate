//******************************************************************************
//* BUILD
//******************************************************************************
var gulp  		= require("gulp"),
    tsc   		= require("gulp-typescript"),
    pkgconfig 	= require('../../package.json'),
    options 	= require('../options'),
	path 		= require('path'),
	fs 			= require('fs'),
    webpack     = require('webpack'),
	sourcemaps  = require("gulp-sourcemaps");

// TypeScript compiler settings
var tsSettings = {
  "typescript": require('typescript'),
  "target": "es5",
  "module": "commonjs",
  "sourceMap": true,
  "experimentalDecorators": true
};

var tsSourceProject = tsc.createProject(tsSettings);

// build source tree
gulp.task("build:source", ["build:assets"], function() {
    gulp.src(["src/server/**/*.json", "src/server/**/*.js"], { base: 'src' }).pipe(gulp.dest(options.output));
    
    var tsResult = gulp.src(options.source, { base: 'src' })
            .pipe(sourcemaps.init())
            .pipe(tsc(tsSourceProject));

    return tsResult.js
            .pipe(sourcemaps.write('maps', {includeContent: false, sourceRoot: path.resolve(__dirname, '../../src')}))
            .pipe(gulp.dest(options.output));
});

gulp.task("build:assets", function() {
    gulp.src(["src/server/**/*.ejs"]).pipe(gulp.dest(path.join(options.output, "server")));
    gulp.src(["public/**/*.*"]).pipe(gulp.dest(path.join(options.output, "server/public")));
    gulp.src(["src/client/**/*.html", "src/client/**/*.css"]).pipe(gulp.dest(path.join(options.output, "client")));
});

gulp.task("build:prod", ["build:source"], function(cb) {
    // returns a Compiler instance
    var compiler = webpack(require('../../webpack.prod.config'));
    compiler.run(cb)
});