import basicTab from './basicTab';

export default function loadPage() {
  const content = document.querySelector('#content');

  const h1 = document.createElement('h1');
  h1.textContent = 'Grand Theft Auto V';
  content.appendChild(h1);

  const buttons = document.createElement('ul');
  buttons.classList.add('buttons');

  const tabNames = ['Basic Info', 'Description', 'System Requirements'];

  tabNames.forEach((name, i) => {
    const item = document.createElement('li');
    item.setAttribute('data-tab', i + '');
    item.textContent = name;

    buttons.appendChild(item);
  });

  content.appendChild(buttons);

  const tabSection = document.createElement('section');
  tabSection.classList.add('tab-list');
  tabSection.appendChild(basicTab());

  const currentTab = tabSection.querySelector('.tab');
  currentTab.classList.add('current-tab');

  content.appendChild(tabSection);
}