const deliveredItems = [
  {
    img: './img/customers/customer-1.jpg',
    alt: 'Customer photo',
  },
  {
    img: './img/customers/customer-2.jpg',
    alt: 'Customer photo',
  },
  {
    img: './img/customers/customer-3.jpg',
    alt: 'Customer photo',
  },
  {
    img: './img/customers/customer-4.jpg',
    alt: 'Customer photo',
  },
  {
    img: './img/customers/customer-5.jpg',
    alt: 'Customer photo',
  },
  {
    img: './img/customers/customer-6.jpg',
    alt: 'Customer photo',
  },
];

const logoItems = [
  {
    img: 'img/logos/techcrunch.png',
    alt: 'Techcrunch logo',
  },
  {
    img: 'img/logos/business-insider.png',
    alt: 'Business Insider logo',
  },
  {
    img: 'img/logos/the-new-york-times.png',
    alt: 'The New York Times logo',
  },
  {
    img: 'img/logos/forbes.png',
    alt: 'Forbes logo',
  },
  {
    img: 'img/logos/usa-today.png',
    alt: 'USA Today logo',
  },
];

const testimonialItems = [
  {
    alt: 'Photo of customer Dave Bryson',
    img: 'img/customers/dave.jpg',
    text: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    name: '&mdash; Dave Bryson',
  },
  {
    alt: 'Photo of customer Ben Hadley',
    img: 'img/customers/ben.jpg',
    text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: '&mdash; Ben Hadley',
  },
  {
    alt: 'Photo of customer Steve Miller',
    img: 'img/customers/steve.jpg',
    text: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: '&mdash; Steve Miller',
  },
  {
    alt: 'Photo of customer Hannah Smith',
    img: 'img/customers/hannah.jpg',
    text: 'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
    name: '&mdash; Hannah Smith',
  },
];

const galleryItems = [
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-1.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-2.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-3.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-4.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-5.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-6.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-7.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-8.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-9.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-10.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-11.jpg',
  },
  {
    alt: 'Photo of beautifully arranged food',
    img: 'img/gallery/gallery-12.jpg',
  },
];

// init
const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

const deliveredImgs = document.querySelector('.delivered-imgs');
const logoImgs = document.querySelector('.logos');
const testimonialImgs = document.querySelector('.testimonials');
const galleryImgs = document.querySelector('.gallery');

window.addEventListener('DOMContentLoaded', function () {
  displayDeliveredItems(deliveredItems);
  displaylogItems(logoItems);
  displaytestimonialItems(testimonialItems);
  displaygalleryItems(galleryItems);
});

const displayDeliveredItems = Item => {
  let deliveredItem = Item.map(item => {
    return `
      <img
        src=${item.img}
        alt=${item.alt}
      />`;
  });
  deliveredImgs.innerHTML = deliveredItem;
};

const displaylogItems = Item => {
  let logItem = Item.map(item => {
    return `
    <img
    src=${item.img}
    alt=${item.alt}
  />`;
  });
  logoImgs.innerHTML = logItem;
};

const displaytestimonialItems = monial => {
  monial.forEach((element, index) => {
    const html = `
    <figure class="testimonial">
      <img
        class="testimonial-img"
        alt=${element.alt}
        src=${element.img}
      />
      <blockquote class="testimonial-text">
        ${element.text}
      </blockquote>
      <p class="testimonial-name">${element.name}</p>
    </figure>`;
    
    testimonialImgs.insertAdjacentHTML('beforeend', html);
  });
};

const displaygalleryItems = gallery => {
  gallery.forEach(element => {
    const galleryhtml = `
    <figure class="gallery-item">
    <img
      src=${element.img}
      alt=${element.alt}
    />
  </figure>`;

  galleryImgs.insertAdjacentHTML('afterbegin', galleryhtml);
  })
}