var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');

gulp.task('live-server', function () {
    var server = new liveServer('Server/main.js');
    server.start();
})

gulp.task('serve', ['live-server'], function () {
    browserSync.init(null, {
        proxy: 'http://localhost:1111',
        port: '1001'
    })
    console.log('Good to go CHEERS !!')
})
