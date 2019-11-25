import basicTab from './basicTab';

export default function loadPage() {
  const content = document.querySelector('#content');

  const h1 = document.createElement('h1');
  h1.textContent = 'Grand Theft Auto V';
  content.appendChild(h1);

  const tablist = document.createElement('ul');
  tablist.classList.add('tab-list');

  const tabNames = ['Basic Info', 'Description', 'System Requirements'];

  tabNames.forEach((name, i) => {
    const item = document.createElement('li');
    item.setAttribute('data-tab', i + '');
    item.textContent = name;

    tablist.appendChild(item);
  });

  content.appendChild(tablist);

  content.appendChild(basicTab());
}