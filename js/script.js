let slider = document.querySelector('.swiper');

const swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 5,
    slidesPerGroup: 3,
    loop: true,
    autoHeight: true,
    speed: 1000,
    autoplay: {
        delay: 4000, // пауза между прокруткой
        stopOnLastSlide: true, //закончить на последнем слайде
        disableOnInteraction: false, //отключить после ручного переключения
    },
    breakpoints: {
        // when window width is >= 320px
        375: {
          slidesPerView: 3
        },
        480: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
    }
  });

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav');
  const body = document.body;
  const navItems = nav.querySelectorAll('a');

  burger.addEventListener('click', () => {
      body.classList.toggle('stop-scroll');
      burger.classList.toggle('burger-acrive');
      nav.classList.toggle('header__nav-visible');
  });

  navItems.forEach(el => {
      el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger.classList.remove('burger-acrive');
        nav.classList.remove('header__nav-visible');  
      });
  });