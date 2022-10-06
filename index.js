function modifyBackground() {
    let block = document.querySelector(".gradient");
    let info = document.querySelector(".gradient__info");

    switch (document.querySelector("#type").value) {
        case 'linear':
            block.background = 'linear-gradient(to left, #80FFDB, #5390D9)';
            info.value = 'linear-gradient(to left, #80FFDB, #5390D9)';
            break;

        case 'conic':
            block.background = 'conic-gradient(to left, #80FFDB, #5390D9)';
            info.value = 'conic-gradient(to left, #80FFDB, #5390D9)';
            break;

        case 'radial':
            block.background = 'radial-gradient(to left, #80FFDB, #5390D9)';
            info.value = 'radial-gradient(to left, #80FFDB, #5390D9)';
            break;
    }
}

let el = document.querySelector(".gradient__button");
el.addEventListener("click", modifyBackground);