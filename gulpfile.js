var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('style', function () {
    gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(pulp.dest('dist/css'))
        .pipe(reload({
            stream: true
        }));
});


/**
 * 编译css
 */
gulp.task('style', function () {
    gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css/'))
        .pipe(reload({
            stream: true
        }));
});

/**
 * 拷贝html
 */
gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(reload({
            stream: true
        }));
});

/**
 * 拷贝js
 */
gulp.task('script', function () {
    gulp.src('src/scripts/*.js')
        .pipe(gulp.dest('dist/js/'))
        .pipe(reload({
            stream: true
        }));
});

/**
 * 拷贝font
 */
gulp.task('font', function () {
    gulp.src('src/font/*')
        .pipe(gulp.dest('dist/font/'))
        .pipe(reload({
            stream: true
        }));
});

/**
 * 拷贝img
 */
gulp.task('img', function () {
    gulp.src('src/images/*')
        .pipe(gulp.dest('dist/images/'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('serve', ['style', 'script', 'html', 'font', 'img'], function () {
    browserSync({
        notify: false,
        port: 2018,
        server: {
            baseDir: ['dist','./']
        }
    });

    gulp.watch('src/styles/*.less', ['style']);
    gulp.watch('src/scripts/*.js', ['script']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/font', ['font']);
    gulp.watch('src/images', ['img']);
});