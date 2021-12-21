module.exports = () =>
    $.g.task('server', () =>
        $.bs.init({
            server: {
                baseDir: $.path.serverDir
            }
        })
        )