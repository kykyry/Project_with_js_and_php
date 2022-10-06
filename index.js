function modifyBackground() {
    let block = document.querySelector(".gradient");
    let info = document.querySelector(".gradient__info");

    switch (document.querySelector("#type").value) {
        case 'linear':
            block.style.background = 'linear-gradient(to left, #80FFDB, #5390D9)';
            info.innerHTML  = 'Background: linear-gradient(to left, #80FFDB, #5390D9)';
            break;

        case 'conic':
            block.style.background = 'conic-gradient(to left, #80FFDB, #5390D9)';
            info.innerHTML  = 'Background: conic-gradient(to left, #80FFDB, #5390D9)';
            break;

        case 'radial':
            block.style.background = 'radial-gradient(to left, #80FFDB, #5390D9)';
            info.innerHTML  = 'Background: radial-gradient(to left, #80FFDB, #5390D9)';
            break;
    }
}

let el = document.querySelector(".gradient__button");
el.addEventListener("click", modifyBackground);