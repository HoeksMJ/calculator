const displayNum = document.getElementById("displayNum");

let storedValue = 0;
let storedOperator = 0;
let operatorPressed = false;

const clearCalculator = () => {
    displayNum.innerText = 0;
    storedValue = 0;
    storedOperator = 0;
    operatorPressed = false;
};

const clearDisplay = () => {displayNum.innerText = 0;};

const showNum = (number) => {
    if (operatorPressed == true) {
        clearDisplay();
        operatorPressed = false;
    };
    if (displayNum.innerText == 0){
        displayNum.innerText = number.innerText;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + `${number.innerText}`;
    };
};

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {clearCalculator();});

const decBtn = document.getElementById("decBtn");
decBtn.addEventListener("click", () => {
    if (!displayNum.innerText.includes(".")){
        displayNum.innerText += ".";
    };
});

const divBtn = document.getElementById("divBtn");
divBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "divide";
    operatorPressed = true;
});

const multBtn = document.getElementById("multBtn");
multBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "multiply";
    operatorPressed = true;
});

const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "minus";
    operatorPressed = true;
});

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "add";
    operatorPressed = true;
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
    else if (storedOperator == "add"){
        displayNum.innerText = storedValue + Number(displayNum.innerText);
    };
    if (displayNum.innerText.length > 10){
        displayNum.innerText = Number(displayNum.innerText).toExponential(3);
    };
    storedOperator = 0;
});

function listenerGenerator(btn) {
    btn = document.getElementById(`${btn}`);
    btn.addEventListener("click", () => {
        showNum(btn);
    });
};

const btnArr = ["zeroBtn", "oneBtn", "twoBtn", "threeBtn", "fourBtn", "fiveBtn", "sixBtn", "sevenBtn", "eightBtn", "nineBtn"];
btnArr.forEach(listenerGenerator);