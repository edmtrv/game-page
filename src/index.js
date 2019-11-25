import page from './page';

page();

const items = document.querySelectorAll('.tab-list li');
items.forEach(item => item.addEventListener('click', switchTabs));

function switchTabs() {
  console.log(this.dataset);
}