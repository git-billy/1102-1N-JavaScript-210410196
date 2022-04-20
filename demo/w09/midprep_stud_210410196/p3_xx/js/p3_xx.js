'use strcit';

const tkuImages = [
  {
    img: './images/TKU1.png',
  },
  {
    img: './images/TKU2.png',
  },
  {
    img: './images/TKU3.png',
  },
  {
    img: './images/TKU4.png',
  },
  {
    img: './images/TKU5.png',
  },
];

const tkuUImages = [
  {
    id: 0,
    src: 'https://www.youtube.com/embed/RechrtUxfQc',
  },
  {
    id: 1,
    src: 'https://www.youtube.com/embed/METhdbL_iMw',
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/ZyDbq-lEKTo',
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/Dt1Q43cr_xE',
  },
  {
    id: 4,
    src: 'https://www.youtube.com/embed/15HoF-ZUAfU',
  },
];

const links = document.querySelectorAll('#heading a');
const iframeContainer = document.querySelector('.iframe-container');
const showImages = document.querySelector('.show-images');
const tkuBtn = document.querySelector('.tku-images');

document.querySelectorAll('aside a').forEach((el, i) => {
  el.addEventListener('click', () => {
    switch (i) {
      case 0:
        iframeContainer.innerHTML = `
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RechrtUxfQc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>`;
        break;
      case 1:
        iframeContainer.innerHTML = `
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/METhdbL_iMw"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>`;
        break;
      case 2:
        iframeContainer.innerHTML = `
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ZyDbq-lEKTo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>`;
        break;
      case 3:
        iframeContainer.innerHTML = `
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Dt1Q43cr_xE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>`;
        break;
      case 4:
        iframeContainer.innerHTML = `
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/15HoF-ZUAfU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>`;
        break;
    }
  });
});

links[0].addEventListener('click', () => {
  document.querySelector('#heading').style.backgroundColor = '#9AADBF';
});

links[1].addEventListener('click', () => {
  console.log(document.querySelector('#main ul').style.setProperty('display', 'flex'));
  tkuBtn.classList.remove('invisible');
  let loopImage = tkuImages.map(item => {
    return `
      <img src=${item.img} width="16%" alt="" />
      `;
  });

  showImages.innerHTML = loopImage;
});
