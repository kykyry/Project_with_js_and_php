function modifyBackground() {
    let block = document.querySelector(".gradient__container");
    let info = document.querySelector(".gradient__info");

    console.log(document.querySelector("#type").value)
    switch (document.querySelector("#type").value) {
        case 'linear':
            console.log('l')
            block.style.background = 'linear-gradient(to left, #80FFDB, #5390D9)';
            info.innerHTML = 'Background: linear-gradient(to left, #80FFDB, #5390D9)';
            break;

        case 'conic':
            console.log('c')
            block.style.background = 'conic-gradient(to left, #80FFDB, #5390D9)';
            info.innerHTML = 'Background: conic-gradient(to left, #80FFDB, #5390D9)';
            break;

        case 'radial':
            console.log('r')
            block.style.background = 'radial-gradient(to left, #80FFDB, #5390D9)';
            info.innerHTML = 'Background: radial-gradient(to left, #80FFDB, #5390D9)';
            break;
    }
}

let el = document.querySelector(".gradient__button");
el.addEventListener("click", modifyBackground, false);