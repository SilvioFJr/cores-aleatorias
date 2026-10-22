// Generates random background colors and shows the code in RGB or HEX

function randomChannel() {
    return Math.floor(Math.random() * 256); // 0–255
}

function randomColor() {
    return [randomChannel(), randomChannel(), randomChannel()];
}

function toRgb([r, g, b]) {
    return `rgb(${r}, ${g}, ${b})`;
}

function toHex(channels) {
    return '#' + channels
        .map((value) => value.toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();
}

const formatters = { rgb: toRgb, hex: toHex };

document.addEventListener("DOMContentLoaded", () => {
    const colorInformation = document.getElementById("colorInformation");
    const navButtons = {
        rgb: document.getElementById("nav-click-rgb"),
        hex: document.getElementById("nav-click-hex"),
    };
    const clickMe = document.getElementById("click-me");

    let colorFormat = 'hex';
    let currentColor = window
        .getComputedStyle(document.body)
        .backgroundColor
        .match(/\d+/g)
        .slice(0, 3)
        .map(Number);

    function render() {
        colorInformation.textContent = formatters[colorFormat](currentColor);
        Object.entries(navButtons).forEach(([format, button]) => {
            const selected = format === colorFormat;
            button.classList.toggle("selected", selected);
            button.setAttribute("aria-pressed", String(selected));
        });
    }

    Object.entries(navButtons).forEach(([format, button]) => {
        button.addEventListener("click", () => {
            colorFormat = format;
            render();
        });
    });

    clickMe.addEventListener("click", () => {
        currentColor = randomColor();
        document.body.style.backgroundColor = toRgb(currentColor);
        render();
    });

    render();
});
