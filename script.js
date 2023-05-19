const displayNum = document.getElementById("displayNum");

const clearDisplay = () => {displayNum.innerText = 0;};

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {clearDisplay();});

const showNum = (number) => {
    if (storedOperator != 0) {
        clearDisplay();
    };
    if (displayNum.innerText == 0){
        displayNum.innerText = number.innerText;
    }
    else if (displayNum.innerText.length < 10){
        displayNum.innerText = String(displayNum.innerText) + `${number.innerText}`;
    };
};

const zeroBtn = document.getElementById("zeroBtn");
zeroBtn.addEventListener("click", () => {
    showNum(zeroBtn);
});

const oneBtn = document.getElementById("oneBtn");
oneBtn.addEventListener("click", () => {
    showNum(oneBtn);
});

const twoBtn = document.getElementById("twoBtn");
twoBtn.addEventListener("click", () => {
    showNum(twoBtn);
});

const threeBtn = document.getElementById("threeBtn");
threeBtn.addEventListener("click", () => {
    showNum(threeBtn);
});

const fourBtn = document.getElementById("fourBtn");
fourBtn.addEventListener("click", () => {
    showNum(fourBtn);
});

const fiveBtn = document.getElementById("fiveBtn");
fiveBtn.addEventListener("click", () => {
    showNum(fiveBtn);
});

const sixBtn = document.getElementById("sixBtn");
sixBtn.addEventListener("click", () => {
    showNum(sixBtn);
});

const sevenBtn = document.getElementById("sevenBtn");
sevenBtn.addEventListener("click", () => {
    showNum(sevenBtn);
});

const eightBtn = document.getElementById("eightBtn");
eightBtn.addEventListener("click", () => {
    showNum(eightBtn);
});

const nineBtn = document.getElementById("nineBtn");
nineBtn.addEventListener("click", () => {
    showNum(nineBtn);
});

let storedValue = 0;
let storedOperator = 0;

const divBtn = document.getElementById("divBtn");
divBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "divide";
});

const multBtn = document.getElementById("multBtn");
multBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "multiply";
});

const minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "minus";
});

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    storedValue = Number(displayNum.innerText);
    storedOperator = "add";
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
    storedOperator = 0;
});