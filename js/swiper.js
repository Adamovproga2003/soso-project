const swiperProducts = new Swiper('.swiper-products', {
  direction: 'horizontal',
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-products-pagination',
    bulletActiveClass: 'carousel-products__pagination-bullet--active',
    bulletClass: 'carousel-products__pagination-bullet',
    horizontalClass: 'carousel-products__pagination-horizontal',
  },

  navigation: {
    nextEl: '.carousel-products__controller-next',
    prevEl: '.carousel-products__controller-prev',
    disabledClass: 'carousel-products__controller-disabled',
  },
});

const swiperQuotes = new Swiper('.swiper-quotes', {
  direction: 'horizontal',
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-quotes-pagination',
    bulletActiveClass: 'carousel-quotes__pagination-bullet--active',
    bulletClass: 'carousel-quotes__pagination-bullet',
    horizontalClass: 'carousel-quotes__pagination-horizontal',
  },

  navigation: {
    nextEl: '.carousel-quotes__controller-next',
    prevEl: '.carousel-quotes__controller-prev',
    disabledClass: 'carousel-quotes__controller-disabled',
  },
});

const swiperBenefits = new Swiper('.swiper-benefits', {
  direction: 'horizontal',
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-benefits-pagination',
    bulletActiveClass: 'carousel-benefits__pagination-bullet--active',
    bulletClass: 'carousel-benefits__pagination-bullet',
    horizontalClass: 'carousel-benefits__pagination-horizontal',
  },

  navigation: {
    nextEl: '.carousel-benefits__controller-next',
    prevEl: '.carousel-benefits__controller-prev',
    disabledClass: 'carousel-benefits__controller-disabled',
  },
});
