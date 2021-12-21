module.exports = ()=>
    $.g.task('html', ()=>
        $.g.src($.path.src.html)
        .pipe($.gp.fileInclude())
        .pipe($.gp.htmlmin({ collapseWhitespace: true }))
        .pipe($.g.dest($.path.dist.html))
        .on('end', $.bs.reload)
    )
