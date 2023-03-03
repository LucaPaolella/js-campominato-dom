"use strict";

//Function

function myCreateElement(htmlElement, className, htmlValue) {
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;

    element.addEventListener("click", function () {

        if (htmlElement === youLose){
            element.classList.add("red");
        }
        else {
            element.classList.add("blue");
        }
        /*element.classList.add("red");*
        /*alert(htmlValue);*/

    })

    return element;
}

function myAppendElement(containerElement, htmlElement) {
    containerElement.append(htmlElement);
}

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
    }
);

// sviluppo gioco: Giorno 2 di lavoro

    let youLose = [];

    const a =Math.floor(Math.random() * 100) + 1;
    const b =Math.floor(Math.random() * 100) + 1;
    const c =Math.floor(Math.random() * 100) + 1;
    const d =Math.floor(Math.random() * 100) + 1;
    const e =Math.floor(Math.random() * 100) + 1;
    const f =Math.floor(Math.random() * 100) + 1;
    const g =Math.floor(Math.random() * 100) + 1;
    const h =Math.floor(Math.random() * 100) + 1;
    const i =Math.floor(Math.random() * 100) + 1;
    const l =Math.floor(Math.random() * 100) + 1;
    const m =Math.floor(Math.random() * 100) + 1;
    const n =Math.floor(Math.random() * 100) + 1;
    const o =Math.floor(Math.random() * 100) + 1;
    const p =Math.floor(Math.random() * 100) + 1;
    const q =Math.floor(Math.random() * 100) + 1;
    const r =Math.floor(Math.random() * 100) + 1;
    
    youLose.push(a, b, c, d, e, f, g, h, i, l, m, n, o, p, q, r);

    console.log(youLose)

    
