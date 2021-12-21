(()=>{
  const reviewsSlider = new Swiper('.review__slider',{
    slidesPerView:1,
    loop:true,
    // spaceBetween: 30,
    navigation: {
        nextEl: '.review__slider-button_next',
        prevEl: '.review__slider-button_prev',
      },
      grabCursor:true,
      breakpoints:{
        888:{
          slidesPerView:3
        }
      }
  })
})()