const genColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;

    document.body.style.background = color;
    document.body.innerHTML = `<h2>${color}</h2>`;
}
setInterval(genColor, 1000);