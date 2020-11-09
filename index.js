const mass = document.querySelector("#mass");
const planetSelect = document.querySelector("#planets");
const button = document.querySelector('button');
const text = document.querySelector('p');

const planets = [
    { name: 'Moon', g: 0.17, value: 'moon', color: 'black' },
    { name: 'Mars', g: 0.38, value: 'mars', color: 'darkblue' },
    { name: 'Venus', g: 0.90, value: 'venus', color: 'darkgrey' },
    { name: 'Earth', g: 1.00, value: 'earth', color: 'darkgreen' },
]

planets.forEach(planet => {
    const option = document.createElement('option');
    option.value = planet.value;
    option.style.color = planet.color;
    option.innerText = planet.name;
    planetSelect.appendChild(option);
});

button.addEventListener('click', () => {
    const weight = mass.value;
    const planetValue = planetSelect.value;
    const planet = planets.find(planet => planet.value === planetValue);
    if (planet && weight) {
        text.textContent = `The weight of the object on ${planet.name} is ${(weight * planet.g).toFixed(2)} kg.`;
    } else {
      text.textContent = 'Fill all inputs'
    }
})
