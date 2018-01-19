const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.textContent = "Hey I'm red";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "Hey I'm a blue h3";
h3.style.color = "blue";
container.appendChild(h3);