var Total = "";
var ViewNum = document.getElementById("ViewNumbers");



function reset(){
    console.log("reset has been pressed");
    ViewNum.innerHTML = "0";
    Total = "";
}
function Subt(){
    Total += "-";
    console.log(Total);
}
function Add(){
    Total += "+";
    console.log(Total);
    ViewNum.innerHTML = eval(Total);
}
function Mult(){
    Total += "*";
    console.log(Total);
    ViewNum.innerHTML = eval(Total);
}
function Div(){
    Total += "/";
    console.log(Total);
    ViewNum.innerHTML = eval(Total);
}
function Equal(){
    console.log(eval(Total));
    ViewNum.innerHTML = eval(Total);
}
function Sev(){
    Total += "7";
    console.log(Total);
    ViewNum.innerHTML = "7";
}
function Eight(){
    Total += "8";
    console.log(Total);
    ViewNum.innerHTML = "8";
}
function Nine(){
    Total += "9";
    console.log(Total);
    ViewNum.innerHTML = "9";
}
function Four(){
    Total += "4";
    console.log(Total);
    ViewNum.innerHTML = "4";
}
function Five(){
    Total += "5";
    console.log(Total);
    ViewNum.innerHTML = "5";
}
function Six(){
    Total += "6";
    console.log(Total);
    ViewNum.innerHTML = "6";
}
function One(){
    Total += "1";
    console.log(Total);
    ViewNum.innerHTML = "1";
}
function Two(){
    Total += "2";
    console.log(Total);
    ViewNum.innerHTML = "2";
}
function Three(){
    Total += "3";
    console.log(Total);
    ViewNum.innerHTML = "3";
}
function Zer(){
    Total += "0";
    console.log(Total);
    ViewNum.innerHTML = "0";
}
function Dec(){
    Total += ".";
    console.log(Total);
    ViewNum.innerHTML += ".";
}

function start(){
    document.getElementById("reset").addEventListener("click", reset,false);
    document.getElementById("Subtract").addEventListener("click", Subt,false);
    document.getElementById("Addition").addEventListener("click", Add,false);
    document.getElementById("Multiply").addEventListener("click", Mult,false);
    document.getElementById("Division").addEventListener("click", Div,false);
    document.getElementById("Equal").addEventListener("click", Equal,false);
    document.getElementById("Seven").addEventListener("click", Sev,false);
    document.getElementById("Eight").addEventListener("click", Eight,false);
    document.getElementById("Nine").addEventListener("click", Nine,false);
    document.getElementById("Four").addEventListener("click", Four,false);
    document.getElementById("Five").addEventListener("click", Five,false);
    document.getElementById("Six").addEventListener("click", Six,false);
    document.getElementById("One").addEventListener("click", One,false);
    document.getElementById("Two").addEventListener("click", Two,false);
    document.getElementById("Three").addEventListener("click", Three,false);
    document.getElementById("Decimal").addEventListener("click", Dec,false);
    document.getElementById("Zero").addEventListener("click", Zer,false);


}

window.addEventListener("load",start,false);