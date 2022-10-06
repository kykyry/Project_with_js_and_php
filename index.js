function modifyBackground() {
    let block = document.querySelector(".gradient__container");
    let info = document.querySelector(".gradient__info");

    switch (document.querySelector("#type").value) {
        case 'linear':
            block.style.background = `linear-gradient(to left, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)})`;
            info.innerHTML = `Background: ${block.style.background}`;
            break;

        case 'conic':
            block.style.background = `conic-gradient(#${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)})`;
            info.innerHTML = `Background: ${block.style.background}`;
            break;

        case 'radial':
            block.style.background = `radial-gradient(#${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)})`;
            info.innerHTML = `Background: ${block.style.background}`;
            break;
    }

    function getRandomInt(min, max) {
        // min = Math.ceil(min);
        // max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
}

let el = document.querySelector(".gradient__button");
el.addEventListener("click", modifyBackground, false);