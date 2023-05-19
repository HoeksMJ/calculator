const displayNum = document.getElementById("displayNum");

const clearDisplay = () => {displayNum.innerText = 0;};

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {clearDisplay();});

const zeroBtn = document.getElementById("zeroBtn");
zeroBtn.addEventListener("click", () => {
    displayNum.innerText = String(displayNum.innerText) + "0";
});

const oneBtn = document.getElementById("oneBtn");
oneBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 1;
    }
    else {
        displayNum.innerText = String(displayNum.innerText) + "1";
    };
});

const twoBtn = document.getElementById("twoBtn");
twoBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 2;
    }
    else {
        displayNum.innerText = String(displayNum.innerText) + "2";
    };
});

const threeBtn = document.getElementById("threeBtn");
threeBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 3;
    }
    else {
        displayNum.innerText = String(displayNum.innerText) + "3";
    };
});

const fourBtn = document.getElementById("fourBtn");
fourBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 4;
    }
    else {
        displayNum.innerText = String(displayNum.innerText) + "4";
    };
});

const fiveBtn = document.getElementById("fiveBtn");
fiveBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 5;
    }
    else {
        displayNum.innerText = String(displayNum.innerText) + "5";
    };
});

const sixBtn = document.getElementById("sixBtn");
sixBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 6;
    }
    else {
        displayNum.innerText = String(displayNum.innerText) + "6";
    };
});

const sevenBtn = document.getElementById("sevenBtn");
sevenBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 7;
    }
    else {
        displayNum.innerText = String(displayNum.innerText) + "7";
    };
});

const eightBtn = document.getElementById("eightBtn");
eightBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 8;
    }
    else {
        displayNum.innerText = String(displayNum.innerText) + "8";
    };
});

const nineBtn = document.getElementById("nineBtn");
nineBtn.addEventListener("click", () => {
    if (displayNum.innerText == 0){
        displayNum.innerText = 9;
    }
    else {
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

const equalsBtn = document.getElementById("equalsBtn");
equalsBtn.addEventListener("click", () => {
    if (storedOperator == "divide"){
        displayNum.innerText = storedValue / Number(displayNum.innerText);
    };
});