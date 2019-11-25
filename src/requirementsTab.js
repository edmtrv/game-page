export default function generateRequrements() {
  const requirementsNode = document.createElement('article');
  requirementsNode.setAttribute('data-section', '3');

  const minHeading = document.createElement('h2');
  minHeading.textContent = 'Minimum System Requirements:';

  const minUl = document.createElement('ul');
  const minItemsHTML = '<li> OS: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1</li><li>Processor: Intel Core 2 Quad CPU Q6600 @2.40GHz(4 CPUs) / AMD Phenom 9850 Quad - Core Processor(4 CPUs) @2.5GHz</li><li>Memory: 4GB</li><li>Video Card: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB(DX 10, 10.1, 11)</li><li>Sound Card: 100 % DirectX 10 compatible</li><li>HDD Space: 65GB</li>';
  minUl.innerHTML = minItemsHTML;

  const recHeading = document.createElement('h2');
  recHeading.textContent = 'Recommended System Requirements:';

  const recUl = document.createElement('ul');
  const recItemsHTML = '<li>OS: Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1</li><li>Processor: Intel Core i5 3470 @3.2GHZ(4 CPUs) / AMD X8 FX - 8350 @4GHZ(8 CPUs)</li><li>Memory: 8GB</li><li>Video Card: NVIDIA GTX 660 2GB / AMD HD7870 2GB</li><li>Sound Card: 100 % DirectX 10 compatible</li><li>HDD Space: 65GB</li>';
  recUl.innerHTML = recItemsHTML;

  requirementsNode.appendChild(minHeading);
  requirementsNode.appendChild(minUl);
  requirementsNode.appendChild(recHeading);
  requirementsNode.appendChild(recUl);

  return requirementsNode;
}