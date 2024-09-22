const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
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
  