const links = document.querySelectorAll('#heading a');
console.log('links', links);

const tku60Text = document.querySelector('#main ul');
console.log('tku60links', tku60Text);

const heading = document.querySelector('#heading');
const iframeContainer = document.querySelector('.iframe-container');
const showImages = document.querySelector('.show-images');

const tkuImages = document.querySelector('.tku-images');
console.log('tkuImages', tkuImages);

const changeVideo = (index) => {
  switch (index) {
    case 1:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 3:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      iframeContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
};

const changeColor = () => {
  heading.style.backgroundColor = '#9AADBF';
  main.style.backgroundColor = '#D3B99F';
  section.style.backgroundColor = '#6D98BA';
  footer.style.backgroundColor = '#210203';
};

const addTku60Text = () => {
  tku60Text.innerHTML = `
    <li><a onclick="changeVideo(1)">淡江大戲 1</a></li>
    <li><a onclick="changeVideo(2)">淡江大戲 2</a></li>
    <li><a onclick="changeVideo(3)">淡江大戲 3</a></li>
    <li><a onclick="changeVideo(4)">淡江大戲 4</a></li>
    <li><a onclick="changeVideo(5)">淡江大戲 5</a></li>  
    `;
  console.log('tku60link innerhtml', tku60Text);
};

const showAllImages = () => {
  showImages.innerHTML = `
    <img src="./images/TKU1.png" width="16%" alt="" />
    <img src="./images/TKU2.png" width="16%" alt="" />
    <img src="./images/TKU3.png" width="16%" alt="" />
    <img src="./images/TKU4.png" width="16%" alt="" />
    <img src="./images/TKU5.png" width="16%" alt="" />
    `;

  tkuImages.classList.toggle('invisible');
};

links[0].addEventListener('click', changeColor);
links[1].addEventListener('click', showAllImages);
links[2].addEventListener('click', addTku60Text);
