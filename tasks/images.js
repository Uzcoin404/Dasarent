module.exports = ()=>
    $.g.task('images', ()=>
        $.g.src($.path.src.images)
        .pipe($.gp.imagemin())
        .pipe($.g.dest($.path.dist.images))
    )
