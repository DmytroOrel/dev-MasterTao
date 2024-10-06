const swiper = new Swiper('#banner-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAdvantages = new Swiper('#advantages', {
  loop: true,
  slidesPreView: 1,
  simulateTouch: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enable: true,
  },
  breakpoints:{
    1025: {
      spaceBetween: 0,
      loop: false,
      slidesPerGround: 8,
      simulateTouch: false,
      pagination: {
        enable: false,
        el: '.swiper-pagination',
      }
    }
  }
});






const typeFile = document.querySelectorAll('.custom-file')

typeFile.forEach(item => {
  item.addEventListener('change', () => {
    const fileName = item.closest('.input-box').querySelector('.file-name')
    fileName.innerHTML = item.files[0].name;
  })
})
