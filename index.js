let h2 = document.querySelector(".display");
const genColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;

    document.body.style.background = color;
    h2.innerHTML = `${color}`;
    genBul();
}
const genBul = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;

    let bulle = document.createElement("span");
    document.body.appendChild(bulle);
    bulle.classList.add("bulle");
    bulle.style.background = color;

    let taille = Math.random() * 200 + 100 +"px";

    bulle.style.width = taille;
    bulle.style.height = taille;
    bulle.style.top = Math.random() * 100 + 50 + "%";
    bulle.style.left = Math.random() * 100 + "%";

    const equilibre = Math.random() > 0.5 ? 1 : -1;
    bulle.style.setProperty("--left", Math.random() * 100 * equilibre + "%");
}
setInterval(genColor, 1000);