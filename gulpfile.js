var gulp = require('gulp');
var liveServer = require('gulp-live-server');

gulp.task('live-server', function () {
    var server = new liveServer('Server/main.js');
    server.start();
    console.log('Good to go CHEERS !!')
});