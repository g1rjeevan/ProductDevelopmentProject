var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var home_path = "F:/Python/bitbucket/britecore/bcinsurer/";
var server_path = "/home/ubuntu/workspaces/django/bcinsurer/";
var path = home_path;

gulp.task('minify-css', function(){
    return gulp.src(path+'static/css/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest(path+'static/build/css/'))
});

gulp.task('uglify', function(){
    return gulp.src(path+'static/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(path+'static/build/js/'))
});

gulp.task('minify', ['minify-css','uglify'])