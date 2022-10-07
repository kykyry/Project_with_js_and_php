function modifyBackground() {
    let block = document.querySelector(".gradient__container");
    let info = document.querySelector(".gradient__info");

    switch (document.querySelector("#type").value) {
        case 'linear':
            console.log("l")
            block.style.background = `linear-gradient(to left, #${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
            info.innerHTML = `Background: ${block.style.background}`;
            break;

        case 'conic':
            console.log("c")
            block.style.background = `conic-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
            info.innerHTML = `Background: ${block.style.background}`;
            break;

        case 'radial':
            console.log("r")
            block.style.background = `radial-gradient(#${getRandomHex()}${getRandomHex()}${getRandomHex()}, #${getRandomHex()}${getRandomHex()}${getRandomHex()})`;
            info.innerHTML = `Background: ${block.style.background}`;
            break;
    }

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
    function getRandomHex() {
        let hexString = getRandomInt(0, 255).toString(16)
        if (hexString.length % 2) {
            hexString = '0' + hexString;
        }
        return hexString;
    }
}

let el = document.querySelector(".gradient__button");
el.addEventListener("click", modifyBackground, false);