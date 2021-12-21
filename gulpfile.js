global.$ = {
    g: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
        tasks: require('fs').readdirSync(`${__dirname}/tasks`),
        serverDir: './dist',
        src: {
            html: [`./src/**/*.html`, '!./src/view/**/*'],
            sass: `./src/sass/*.scss`,
            js: `./src/js/*.js`,
            fonts: `./src/fonts/**/*.*`,
            images: `./src/images/**/*.{jpg,png,svg,gif}`,
        },
        dist: {
            html: './dist/',
            sass: `./dist/css/`,
            js: `./dist/js/`,
            fonts: `./dist/fonts/`,
            images: `./dist/images/`,
        },
        watch: {
            html: `./src/**/*.{html,json}`,
            sass: `./src/sass/**/*.scss`,
            js: `./src/js/**/*.js`,
            fonts: `./src/fonts/**/*.*`,
            images: `./src/images/**/*.{jpg,png,svg,gif}`,
        }
    }
}
// var gulp        = require('gulp');
// var deploy      = require('gulp-gh-pages');

// gulp.task('deploy', function () {
//   return gulp.src("./dist/**/*")
//     .pipe(deploy())
// });
var ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});

$.path.tasks.forEach(task=>require(`${__dirname}/tasks/${task}`)())

exports.default = $.g.series('clean', $.g.parallel('html', 'sass', 'js','fonts', 'server', 'watch','images'))
exports.build = $.g.series('clean', $.g.parallel('html', 'sass', 'js','fonts', 'images'))
exports.watch = $.g.series('clean', $.g.parallel('html', 'sass', 'js','fonts', 'images','watch'))
