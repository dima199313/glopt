$(document).ready(function () {


  //валидатор форм
  const validatorForm = function (form) {
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: '*Пожалуйста укажите свое имя',
        phone: '*Пожалуйста укажите свой номер',
        email: {
          required: '*Пожалуйста укажите свою почту',
          email: '*Введен некоректный адрес',
        },
      },
    });
  };
  validatorForm('.form__action1');


  //маска номера
  //Убрать в html type number
  $('.form__input[name = phone]').mask('+375 (99) 999-99-99');
  
  
  
  
  
  // slider
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/icon/prev.png"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/icon/next.png"/></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        // settings: {
        //   arrows: false,
        //   dots: true,
        // },
      },
    ],
  });
});


const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
burger.addEventListener('click',()=>{
  burger.classList.toggle('active')
  nav.classList.toggle('open')
})