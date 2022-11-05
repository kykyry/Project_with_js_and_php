function modifyColumn() {
    let columnCount; //Переменные, которые можно менять
    let elementGap; //Переменные, которые можно менять
    let parentDiv = document.querySelector(".root");
    // let childDiv = document.querySelectorAll(".root .root__el");
    // let columnArray = [];
    // let min_index = 0;

    // if (document.querySelectorAll(".new__div")) {
    //     document.querySelectorAll(".root__el").forEach(element => parentDiv.appendChild(element));
    //     document.querySelectorAll(".new__div").forEach(element => element.remove());
    // }

    switch (document.querySelector("#column").value) {
        case "two": columnCount = 2; break;
        case "three": columnCount = 3; break;
        case "four": columnCount = 4; break;
        case "five": columnCount = 5; break;
    }
    switch (document.querySelector("#gutters").value) {
        case "ten": elementGap = 10; break;
        case "twenty": elementGap = 20; break;
        case "thirty": elementGap = 30; break;
        case "fourty": elementGap = 40; break;
        case "fifty": elementGap = 50; break;
    }
    let columnWidth = (window.innerWidth - (columnCount - 1) * elementGap) * 100 / (window.innerWidth * columnCount);


    // document.querySelectorAll(".root__el").forEach(element => element.style.width = `${columnWidth}%`);
    document.querySelectorAll(".root__el").forEach(element => element.style.cssText = `text-align: left; margin-bottom: ${elementGap}px; width: ${columnWidth}%`);
    // for (let i = 0; i < columnCount; i++) {
    //     let newDivColumn = document.createElement('div');
    //     newDivColumn.className = "new__div";
    //     newDivColumn.id = "a" + i; //a добавлено, т.к. id начинать с цифры нельзя
    //     newDivColumn.style.cssText = `width: ${columnWidth}%`; //float: left;
    //     parentDiv.prepend(newDivColumn);
    //     columnArray.push(newDivColumn);
    // }

    // for (let j = 0; j < childDiv.length; j++) {
    //     let min_height = 1000000;
    //     for (let i = columnArray.length - 1; i >= 0; i--) {
    //         if (min_height > columnArray[i].offsetHeight) {
    //             min_height = columnArray[i].offsetHeight;
    //             min_index = i;
    //         }
    //     }
    //     document.querySelector(`#a${min_index}`).appendChild(childDiv[j]);
    // }

    // document.querySelectorAll(".root__el").forEach(el => el.style.cssText = `margin-bottom: ${elementGap}px;`)
    parentDiv.style.cssText = `display: flex; flex-wrap: wrap; justify-content: space-between;`;
}

let btn = document.querySelector(".column__btn");
btn.addEventListener("click", modifyColumn, true);