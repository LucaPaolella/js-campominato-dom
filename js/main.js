"use strict";

//Function

function myCreateElement(htmlElement, className, htmlValue) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;

    element.addEventListener("click", function () {
        element.classList.add("blue");
        /*alert(htmlValue);*/
    })

    return element;
}

function myAppendElement(containerElement, htmlElement) {
    containerElement.append(htmlElement);
}

//Altra strada
/*
function createBoard(cellNumber){
    let fragmentBoard = document.createDocumentFragment();
    
    for (let i = 1; i <= cellNumber; i++){
        const element = document.createElement("div");
        element.classList.add("cell");
        element.style = `--larghezza=${Math.sqrt(cellNumber)}`;
        element.style.height = element.style.width;

        element.innerText = i;
        fragmentBoard.append(element);
    }
    return fragmentBoard;
}

function campoMinato(){
    const boardContainer = document.querySelector(".board");
    

    let cellNumber;
    let level = 3;

    for(let i=1; i <= cellNumber; i++){
        const element = document.createElement("div");
        element.classList.add("cell");
        element.innerText = i;
        boardContainer.append(element);
    }

    switch (level){
        case 2: 
        cellNumber = 81;
        break;

        case 3: 
        cellNumber = 49;

        case 1:
            default:
                cellNumber=100;
    }

    const fragmentBoard = createBoard(cellNumber);
    boardContainer.append(fragmentBoard);
}
*/
//main

let cellNumber = 100;
const containerBoard = document.querySelector(".board");

for (let i = 1; i <= cellNumber; i++) {
    const createdElement = myCreateElement("div", "cell", i);
    myAppendElement(containerBoard, createdElement);
}

//button 

const play = document.getElementById("play");
const start = document.querySelector(".corpo");
const none = document.querySelector(".none");



document.getElementById("play").addEventListener('click',
    function () {

        start.classList.add("show");
        none.classList.remove("none");

        //bonus
        /*
        const easy = document.getElementById("easy");
        const hard = document.getElementById("hard");
        const medium = document.getElementById("medium");

        let cellNumber;*/
        /*let cellNumber = 100;*/
       /* const containerBoard = document.querySelector(".board");

        for (let i = 1; i <= cellNumber; i++) {
            const createdElement = myCreateElement("div", "cell", i);
            myAppendElement(containerBoard, createdElement);
        }

        const mediumValue = medium.value;
        const easyValue = easy.value;
        const hardValue = hard.value;*/


        /*let level = 3;*/

        /*for (let i = 1; i <= cellNumber; i++) {
            const element = document.createElement("div");
            element.classList.add("cell");
            element.innerText = i;
            boardContainer.append(element);
        }

        if (mediumValue = "Medium") {
            cellNumber = 81;
        }
        else if (hardValue = "Hard") {
            cellNumber = 49;
        }
        else if (easyValue = "Easy") {
            cellNumber = 100;
        }*/

    }
);

/*switch (level){
    case 2: 
    cellNumber = 81;
    break;

    case 3: 
    cellNumber = 49;

    case 1:
        default:
            cellNumber=100;
}
});*/

