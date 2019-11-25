export default function generateDescription() {
  const descNode = document.createElement('article');
  descNode.setAttribute('data-section', '2');
  descNode.classList.add('tab');

  const p1 = document.createElement('p');

  p1.textContent = "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective. Players complete missions—linear scenarios with set objectives—to progress through the story. Outside of the missions, players may freely roam the open world. Composed of the San Andreas open countryside area, including the fictional Blaine County, and the fictional city of Los Santos, the world is much larger in area than earlier entries in the series. It may be fully explored after the game's beginning without restriction, although story progress unlocks more gameplay content.";

  const p2 = document.createElement('p');

  p2.textContent = "Players use melee attacks, firearms and explosives to fight enemies, and may run, jump, swim or use vehicles to navigate the world. To accommodate the map's size, the game introduces vehicle types absent in its predecessor Grand Theft Auto IV, such as fixed-wing aircraft. In combat, auto-aim and a cover system may be used as assistance against enemies. Should players take damage, their health meter will gradually regenerate to its halfway point. Players respawn at hospitals when their health depletes. If players commit crimes, law enforcement agencies may respond as indicated by a \"wanted\" meter in the head-up display (HUD). Stars displayed on the meter indicate the current wanted level (for example, at the maximum five-star level, police helicopters and SWAT teams swarm to lethally dispatch players). Law enforcement officers will search for players who leave the wanted vicinity. The meter enters a cool-down mode and eventually recedes when players are hidden from the officers' line of sight that displays on the mini-map.";

  const p3 = document.createElement('p');

  p3.textContent = "While free-roaming the game world, players may engage in context-specific activities such as scuba diving and BASE jumping. Each character has a smartphone for contacting friends, starting activities and accessing an in-game Internet. The Internet lets players trade in stocks via a stock market. Players may purchase properties such as garages and businesses, upgrade the weapons and vehicles in each character's arsenal. Players may also visit places such as cinemas and strip clubs. Players can also customise their appearance by purchasing outfits, haircuts and tattoos.";

  descNode.appendChild(p1);
  descNode.appendChild(p2);
  descNode.appendChild(p3);

  return descNode;
}