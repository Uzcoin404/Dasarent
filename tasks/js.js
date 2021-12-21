module.exports = ()=>
    $.g.task('js', ()=>
        $.g.src($.path.src.js)
        .pipe($.gp.babel())
        .pipe($.g.dest($.path.dist.js))
        .on('end',$.bs.reload)
    )
