const CHANGE_COLOR = 1000;
let idColor = null;

const elements = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}
elements.btnStop.disabled = true;

// VAR 1
elements.btnStart.addEventListener('click', () => {
    elements.btnStart.disabled = true;
    elements.btnStop.disabled = false;
    idColor = setInterval(() => {
    elements.body.style.backgroundColor = getRandomHexColor()
}, CHANGE_COLOR)});


elements.btnStop.addEventListener('click', () => {
    elements.btnStart.disabled = false;
    elements.btnStop.disabled = true;
    
    clearInterval(idColor);
});


// VAR 2


// function onBtnStartChangeColor() {
//     elements.btnStart.disabled = true;
//     elements.btnStop.disabled = false;
   

//     idColor = setInterval(() => {
//         elements.body.style.backgroundColor = getRandomHexColor()
//     }, CHANGE_COLOR_DELAY);
// }

// function onBtnStopChangeColor() {
//     elements.btnStart.disabled = false;
//     elements.btnStop.disabled = true;
    

//     clearInterval(idColor);
// }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}