import page from './page';

page();

const items = document.querySelectorAll('.buttons li');
items.forEach(item => item.addEventListener('click', switchTabs));

function switchTabs() {
  const currentButton = this.dataset.tab;
  const openTab = document.querySelector('.current-tab');

}