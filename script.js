const displayNum = document.getElementById("displayNum");

const clearDisplay = () => {displayNum.innerText = 0;};

displayNum.innerText = "hi"

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {console.log("clicked"); clearDisplay();});
