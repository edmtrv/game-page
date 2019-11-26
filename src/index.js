import './styles.css';
import page from './page';
import basicTab from './descriptionTab';
import descriptionTab from './reviewTab';
import requirementsTab from './requirementsTab';

page();

const items = document.querySelectorAll('.buttons li');
items.forEach(item => item.addEventListener('click', switchTabs));

function switchTabs() {
  const currentButton = this.dataset.id;
  const currentTab = document.querySelector('.current-tab');
  if (currentButton == currentTab.dataset.tab) return;

  items.forEach(item => item.classList.remove('active'));

  let nextTab = null;

  switch (currentButton) {
    case '1':
      nextTab = basicTab();
      break;
    case '2':
      nextTab = descriptionTab();
      break;
    case '3':
      nextTab = requirementsTab();
      break;
    default:
      nextTab = '<p>Empty content</p>';
      break;
  }

  nextTab.classList.add('current-tab');
  this.classList.add('active');
  const parent = currentTab.parentNode;
  parent.innerHTML = '';
  parent.appendChild(nextTab);
}