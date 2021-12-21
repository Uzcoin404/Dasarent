module.exports = ()=>
    $.g.task('fonts', ()=>
        $.g.src($.path.src.fonts)
        .pipe($.gp.fonter({
            // subset: [66,67,68, 69, 70, 71],
            formats: ['woff','otf']
          }))
        .pipe($.g.dest($.path.dist.fonts))
    )

