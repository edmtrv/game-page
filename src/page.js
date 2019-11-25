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

  const currentTab = document.createElement('section');
  currentTab.classList.add('tab-list');
  currentTab.appendChild(basicTab());

  content.appendChild(currentTab);
}