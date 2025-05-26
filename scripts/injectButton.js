// Create the button
const button = document.createElement('button');
button.textContent = 'Copy To CACI';
button.style.position = 'fixed';
button.style.bottom = '10px';
button.style.right = '10px';
button.style.zIndex = 10000;
button.style.padding = '10px';
button.style.backgroundColor = '#007bff';
button.style.color = '#fff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';

// Add the button to the page
document.body.appendChild(button);

// Button click handler to load your-script.js
button.addEventListener('click', copyTimecardValues);
