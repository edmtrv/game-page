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
  console.log(currentButton);
  if (currentButton == currentTab.dataset.tab) return;

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
    default:
      nextTab = '<p>Empty content</p>';
      break;
  }

  console.log(nextTab);
  nextTab.classList.add('current-tab');
  const parent = currentTab.parentNode;
  parent.innerHTML = '';
  parent.appendChild(nextTab);
}