var gulp = require("gulp");
var fs = require("fs");
var execSync = require("child_process").execSync;

gulp.task('deploy', function() {
    fs.renameSync('node_modules', 'node_modules.backup');
    execSync('slc build');
    execSync('slc deploy http+ssh://homeschooljoy.com:8701/');
    fs.rmdirSync('node_modules');
    fs.renameSync('node_modules.backup', 'node_modules');    
});
