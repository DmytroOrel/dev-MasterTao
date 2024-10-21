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
  autoplay:{
    delay: 3000,
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
    992: {
      slidesPreView: 1,
      spaceBetween: 0,
      loop: false,
      slidesPerGround: 8,
      simulateTouch: false,
      pagination: {
        enable: false,
        el: '.swiper-pagination',
      },
    }
  }
});









const swiperSwiperCarousel = new Swiper('.swiper-carousel', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  clickable: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
     
  },
  navigation: {
      enabled: true,
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
  },
  // autoplay:{
  //   delay: 3000,
  // },

  breakpoints: {
     767: {
      slidesPerView: 1,
      navigation: {
          enabled: false,
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique'
      },
     },
      861: {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
              enabled: true,
              nextEl: '.swiper-button-next-unique',
              prevEl: '.swiper-button-prev-unique'
          },
      },

      1252: {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
              enabled: true,
              nextEl: '.swiper-button-next-unique',
              prevEl: '.swiper-button-prev-unique'
          },
      }
  }
});


const swiperSwiperService = new Swiper('.swiper-service', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  clickable: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
     
  },
  navigation: {
      enabled: true,
      nextEl: '.swiper-button-next-services',
      prevEl: '.swiper-button-prev-services'
  },
  // autoplay:{
  //   delay: 3000,
  // },

  breakpoints: {
     767: {
      slidesPerView: 1,
      navigation: {
          enabled: false,
          nextEl: '.swiper-button-next-services',
          prevEl: '.swiper-button-prev-services'
      },
     },
      861: {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
              enabled: true,
              nextEl: '.swiper-button-next-services',
              prevEl: '.swiper-button-prev-services'
          },
      },

      1252: {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
              enabled: true,
              nextEl: '.swiper-button-next-services',
              prevEl: '.swiper-button-prev-services'
          },
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
