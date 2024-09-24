const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },


    navigation:{
      enabled: false,
    },


    breakpoints: {
      992: {
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  });


  const cat = {
    name: "Murka",
    old: 3,
    color: "white",
    parents: {
      mother: "Basya",
      father: "Arsen"
    }
  }
  const dog = {
    name: "Mila",
    old: 1,
    color: "grey",
    parents: {
      mother: "Senna",
      old: 3,
      father: "Jack",
      old: 4
    }
  }
  