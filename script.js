
// Cores no Hexadecimal RRGGBB (RGB)
// Cores no RGB rgb(0-255,0-255,0-255)

function changeBackgroundColor(colorFormat) {
    let result;

    if (colorFormat === 'rgb') {
        result = convertToRgb(generateRandomNumbers());
    } else if (colorFormat === 'hex') {
        result = convertToHex(generateRandomNumbers());
    }

    document
        .getElementById("colorInformation")
        .textContent = result;
    document
        .body
        .style
        .backgroundColor = result;
}

function generateRandomNumbers() {
    return (Math.random() * 1000000)
        .toFixed(0)
        .toString()
        .padStart(6, '0');
}

function convertToRgb(input) {
    const part1 = input.substring(0, 2);
    const part2 = input.substring(2, 4);
    const part3 = input.substring(4, 6);

    let output = 'rgb(' +
        parseInt(part1, 16).toString().padStart(3, '0') + ',' +
        parseInt(part2, 16).toString().padStart(3, '0') + ',' +
        parseInt(part3, 16).toString().padStart(3, '0') + ')';

    return output
}

function convertToHex(input) {
    const part1 = input.substring(0, 2);
    const part2 = input.substring(2, 4);
    const part3 = input.substring(4, 6);

    let output = '#' +
        parseInt(part1, 10).toString(16).padStart(2, '0') +
        parseInt(part2, 10).toString(16).padStart(2, '0') +
        parseInt(part3, 10).toString(16).padStart(2, '0');

    return output
}


document.addEventListener("DOMContentLoaded", () => {
    // Recebe as cores pré-definidas no style.css
    document
        .getElementById("colorInformation")
        .textContent = window
            .getComputedStyle(document.body)
            .backgroundColor;

    const navRGB = document.getElementById("nav-click-rgb");
    const navHEX = document.getElementById("nav-click-hex");
    const clickME = document.getElementById("click-me");

    let colorFormat = 'hex';

    navRGB.addEventListener("click", () => {
        colorFormat = 'rgb';
    });

    navHEX.addEventListener("click", () => {
        colorFormat = 'hex';
    });

    clickME.addEventListener("click", () => {
        changeBackgroundColor(colorFormat);
    });
});