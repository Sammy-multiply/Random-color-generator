const h1 = document.querySelector('h1');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    const randColor = `rgb(${r},${g},${b})`

    document.body.style.backgroundColor = randColor;
    h1.innerText = `The rgb color is: ${randColor}`
})