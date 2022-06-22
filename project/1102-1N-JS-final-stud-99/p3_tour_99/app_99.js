const section = document.querySelector('.section-center');
const url = '/api/tours.json';
let loading = true;
let tours = [];

const displayTours = ({ tours }) => {
  tours.forEach(i => {
    section.insertAdjacentHTML('beforebegin', `
      <article class="single-tour">
        <img
          src=${i.local_img}
          alt="Best of Salzburg &amp; Vienna in 8 Days Tour"
        />
        <footer>
          <div class="tour-info">
            <h4>${i.name}</h4>
            <h4 class="tour-price">${i.price}</h4>
          </div>
          <p>
            ${i.info}<button>read more</button>
          </p>
          <button class="delete-btn">not interested</button>
        </footer>
      </article>
    `)
  })
};

const fetchTours = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  displayTours(data)
};

window.addEventListener('DOMContentLoaded', () => {
  fetchTours(url);
});
