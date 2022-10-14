let columnCount = 2; //Переменные, которые можно менять
let elementGap = 40; //Переменные, которые можно менять
let parentDiv = document.querySelector(".root");
let childDiv = document.querySelectorAll(".root .el");
let columnWidth = (window.innerWidth - (columnCount - 1)*elementGap )* 100 / (window.innerWidth*columnCount);
let columnArray = []; 
let min_index = 0;

for (let i = 0; i < columnCount; i++) {
    let newDivColumn = document.createElement('div');
    newDivColumn.id = "a" + i; //a добавлено, т.к. id начинать с цифры нельзя
    newDivColumn.style.cssText=`width: ${columnWidth}%`; //float: left;
    parentDiv.prepend(newDivColumn);
    columnArray.push(newDivColumn);
}

for (let j = 0; j < childDiv.length; j++) {
    let min_height = 1000000;
    for (let i = columnArray.length - 1; i >= 0; i--) {
        if (min_height > columnArray[i].offsetHeight) {
            min_height = columnArray[i].offsetHeight;
            min_index = i;
        }
    }
    document.querySelector(`#a${min_index}`).appendChild(childDiv[j]);
}

document.querySelectorAll(".el").forEach(el => el.style.cssText = `margin-bottom: ${elementGap}px;`)
parentDiv.style.cssText=`display: flex; justify-content: space-between;`;