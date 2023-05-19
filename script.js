const displayNum = document.getElementById("displayNum");

const clearDisplay = () => {displayNum.innerText = 0;};

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {clearDisplay();});

const zeroBtn = document.getElementById("zeroBtn");
zeroBtn.addEventListener("click", () => {
    if (displayNum.innerText.length < 10){
    displayNum.innerText = String(displayNum.innerText) + "0";
    };
});

const oneBtn = document.getElementById("oneBtn");
oneBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 1;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + "1";
    };
});

const twoBtn = document.getElementById("twoBtn");
twoBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 2;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + "2";
    };
});

const threeBtn = document.getElementById("threeBtn");
threeBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 3;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + "3";
    };
});

const fourBtn = document.getElementById("fourBtn");
fourBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 4;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + "4";
    };
});

const fiveBtn = document.getElementById("fiveBtn");
fiveBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 5;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + "5";
    };
});

const sixBtn = document.getElementById("sixBtn");
sixBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 6;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + "6";
    };
});

const sevenBtn = document.getElementById("sevenBtn");
sevenBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 7;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + "7";
    };
});

const eightBtn = document.getElementById("eightBtn");
eightBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 8;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + "8";
    };
});

const nineBtn = document.getElementById("nineBtn");
nineBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 9;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + "9";
    };
});

let storedValue;
let storedOperator;

const divBtn = document.getElementById("divBtn");
divBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "divide";
    clearDisplay();
});

const multBtn = document.getElementById("multBtn");
multBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "multiply";
    clearDisplay();
});

const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "minus";
    clearDisplay();
});

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "add";
    clearDisplay();
});

const equalsBtn = document.getElementById("equalsBtn");
equalsBtn.addEventListener("click", () => {
    if (storedOperator == "divide"){
        displayNum.innerText = storedValue / Number(displayNum.innerText);
    }
    else if (storedOperator == "multiply"){
        displayNum.innerText = storedValue * Number(displayNum.innerText);
    }
    else if (storedOperator == "minus"){
        displayNum.innerText = storedValue - Number(displayNum.innerText);
    }
    else {
        displayNum.innerText = storedValue + Number(displayNum.innerText);
    };
});