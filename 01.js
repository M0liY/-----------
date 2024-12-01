const hue = document.querySelector('.hue');
const grayscale = document.querySelector('.grayscale');
const contrast = document.querySelector('.contrast');
const opacity = document.querySelector('.opacity');
const blure = document.querySelector('.blure');

const img = document.querySelector('img');

function changeStyle() {
    img.style.filter = `
        hue-rotate(${hue.value}deg)
        grayscale(${grayscale.value}%)
        contrast(${contrast.value}%)
        opacity(${opacity.value}%)
        blur(${blure.value}px)
    `

}
hue.addEventListener('input', changeStyle)
grayscale.addEventListener('change', changeStyle)
contrast.addEventListener('change', changeStyle)
opacity.addEventListener('change', changeStyle);
blure.addEventListener('change', changeStyle);
