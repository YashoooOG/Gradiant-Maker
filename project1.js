// JavaScript code for a color gradient generator
let btn1 = document.getElementById("buts1");
let btn2 = document.getElementById("buts2");
let copydiv = document.querySelector(".copycss");
let rgb1 = "#7fff5f";
let rgb2 = "#7b88fe";

const colorgenerator = () => {
    let myc = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += myc[Math.floor(Math.random() * 16)];
    }
    return color;
}


const handle1 = () => {
    rgb1 = colorgenerator();
    console.log(rgb1);
     document.querySelector(".previewbox").style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    document.querySelector(".copycss h2").textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    document.querySelector("#buts1").textContent = `${rgb1}`;
    document.querySelector("#buts1").style.color = `${rgb1}`;
    document.querySelector("#buts1").style.borderColor = `${rgb1}`;
}
const handle2 = () => {
    rgb2 = colorgenerator();
    console.log(rgb2);
    document.querySelector(".previewbox").style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    document.querySelector(".copycss h2").textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
    document.querySelector("#buts2").textContent = `${rgb2}`;
    document.querySelector("#buts2").style.color = `${rgb2}`;
    document.querySelector("#buts2").style.borderColor = `${rgb2}`;
}

copydiv.addEventListener("click", () => {
    navigator.clipboard.writeText(document.querySelector(".copycss h2").textContent);
});

btn1.addEventListener("click", handle1);
btn2.addEventListener("click", handle2);