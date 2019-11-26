import descriptionTab from './descriptionTab';

export default function loadPage() {
  const content = document.querySelector('#content');

  const h1 = document.createElement('h1');
  h1.textContent = 'Grand Theft Auto V';
  content.appendChild(h1);

  const buttons = document.createElement('ul');
  buttons.classList.add('buttons');

  const tabNames = ['Description', 'Review', 'System Requirements'];

  tabNames.forEach((name, i) => {
    const item = document.createElement('li');
    item.setAttribute('data-id', (i + 1) + '');
    item.textContent = name;
    if (i == 0) item.classList.add('active');

    buttons.appendChild(item);
  });

  content.appendChild(buttons);

  const tabSection = document.createElement('section');
  tabSection.classList.add('tab-list');
  tabSection.appendChild(descriptionTab());

  const currentTab = tabSection.querySelector('.tab');
  currentTab.classList.add('current-tab');

  content.appendChild(tabSection);
}