// Carousel interaction
const carouselCategories = document.querySelectorAll('.carousel__category');
const carouselPanel = document.querySelector('.carousel__panel');

// FAQs interaction
const faqsItems = document.querySelectorAll('.faqs-section__item');
const faqsAnswers = document.querySelectorAll('.faqs-section__item-answer');

let activeCarouselPanelIndex = 0;
let activeFaqIndex = 0;

carouselCategories.forEach((category, index) =>
  category.addEventListener('click', () => {
    console.log(category.getBoundingClientRect());
    const width = category.getBoundingClientRect().width;
    let left = 0;

    let i = 0;
    while (i < index) {
      left += carouselCategories[i].getBoundingClientRect().width;
      i++;
    }

    carouselPanel.style.setProperty('--width', `${width}px`);
    carouselPanel.style.setProperty('--left', `${left}px`);

    activeIndex = index;
  }),
);

faqsItems.forEach((faq, index) =>
  faq.addEventListener('click', () => {
    if (activeFaqIndex === index) {
      faq.classList.toggle('faqs-section__item--active');
      if (!faq.classList.contains('faqs-section__item--active')) {
        faqsAnswers[index].style.height = `0px`;
      } else {
        faqsAnswers[
          index
        ].style.height = `${faqsAnswers[index].scrollHeight}px`;
      }
    } else {
      faqsItems[activeFaqIndex].classList.remove('faqs-section__item--active');
      faqsAnswers[activeFaqIndex].style.height = `0px`;

      activeFaqIndex = index;

      faqsAnswers[index].style.height = `${faqsAnswers[index].scrollHeight}px`;
      faq.classList.add('faqs-section__item--active');
    }
  }),
);
