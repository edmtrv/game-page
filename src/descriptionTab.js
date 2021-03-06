import gameImg from './img/game-image.jpg';

export default function generateDescription() {
  const infoNode = document.createElement('section');
  infoNode.setAttribute('data-tab', '1');
  infoNode.classList.add('tab');

  const figure = document.createElement('figure');
  figure.classList.add('game-photo');

  const img = document.createElement('img');
  img.src = gameImg;

  figure.appendChild(img);

  const article = document.createElement('article');
  article.classList.add('description-text');
  article.textContent = "Grand Theft Auto V is a 2013 action-adventure video game developed by Rockstar North and published by Rockstar Games.It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single - player story follows three criminals and their effortsto commit heists while under pressure from a government agency.The open world design lets players freely roam San Andreas'open countryside and the fictional city of Los Santos, based on Los Angeles.";

  infoNode.appendChild(figure);
  infoNode.appendChild(article);

  return infoNode;
}