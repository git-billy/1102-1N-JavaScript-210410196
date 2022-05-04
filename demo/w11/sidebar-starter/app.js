const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

const closebar = document.querySelector('.close-btn');

console.log(closebar);

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
});

closebar.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});
