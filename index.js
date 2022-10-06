function modifyBackground() {
    let block = document.querySelector(".gradient__container");
    let info = document.querySelector(".gradient__info");

    switch (document.querySelector("#type").value) {
        case 'linear':
            console.log("l")
            block.style.background = `linear-gradient(to left, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)})`;
            info.innerHTML = `Background: linear-gradient(#${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)})`;
            break;

        case 'conic':
            console.log("c")
            block.style.background = `conic-gradient(#${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)})`;
            info.innerHTML = `Background: conic-gradient(#${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)})`;
            break;

        case 'radial':
            console.log("r")
            block.style.background = `radial-gradient(#${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)})`;
            info.innerHTML = `Background: radial-gradient(#${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}, #${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)}${getRandomInt(0, 255).toString(16)})`;
            break;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
}

let el = document.querySelector(".gradient__button");
el.addEventListener("click", modifyBackground, false);