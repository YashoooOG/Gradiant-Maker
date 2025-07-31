// JavaScript code for a color gradient generator
let btn1 = document.getElementById("buts1");
let btn2 = document.getElementById("buts2");
let copydiv = document.querySelector(".copycss");
let gradientSelector = document.getElementById("gradientType");
let rgb1 = "#7fff5f";
let rgb2 = "#7b88fe";

const colorgenerator = () => {
    let myc = "0123456789abcdef";
    color = "#";
    for (let i = 0; i < 6; i++) {
        color += myc[Math.floor(Math.random() * 16)];
    }
    return color;
}

const getGradientStyle = () => {
    const gradientType = gradientSelector.value;
    switch(gradientType) {
        case 'linear':
            return `linear-gradient(to right, ${rgb1}, ${rgb2})`;
        case 'radial':
            return `radial-gradient(circle, ${rgb1}, ${rgb2})`;
        case 'conic':
            return `conic-gradient(${rgb1}, ${rgb2})`;
        case 'reflected':
            return `linear-gradient(to right, ${rgb1}, ${rgb2}, ${rgb1})`;
        default:
            return `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    }
}

const updateGradient = () => {
    const gradientStyle = getGradientStyle();
    document.querySelector(".previewbox").style.backgroundImage = gradientStyle;
    document.querySelector(".copycss h2").textContent = `background-image: ${gradientStyle}`;
}


const handle1 = () => {
    rgb1 = colorgenerator();
    console.log(rgb1);
    updateGradient();
    document.querySelector("#buts1").textContent = `${rgb1}`;
    document.querySelector("#buts1").style.color = `${rgb1}`;
    document.querySelector("#buts1").style.borderColor = `${rgb1}`;
}
const handle2 = () => {
    rgb2 = colorgenerator();
    console.log(rgb2);
    updateGradient();
    document.querySelector("#buts2").textContent = `${rgb2}`;
    document.querySelector("#buts2").style.color = `${rgb2}`;
    document.querySelector("#buts2").style.borderColor = `${rgb2}`;
}

copydiv.addEventListener("click", () => {
    navigator.clipboard.writeText(document.querySelector(".copycss h2").textContent);
});

gradientSelector.addEventListener("change", updateGradient);

btn1.addEventListener("click", handle1);
btn2.addEventListener("click", handle2);