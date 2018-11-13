var Total = "";



function reset(){
    console.log("reset has been pressed");
    document.getElementById("ViewNumbers").innerHTML = "0";
    Total += "1";
    console.log(eval(Total));
}
function Subt(){
    Total += "-";
    console.log(Total);
}
function Add(){
    Total += "+";
    console.log(Total);
}
function Mult(){
    Total += "*";
    console.log(Total);
}
function Div(){
    Total += "/";
    console.log(Total);
}
function Equal(){
    console.log(eval(Total));
}
function Sev(){
    Total += "7";
    console.log(Total);
}
function Eight(){
    Total += "8";
    console.log(Total);
}
function Nine(){
    Total += "9";
    console.log(Total);
}
function Four(){
    Total += "4";
    console.log(Total);
}
function Five(){
    Total += "5";
    console.log(Total);
}
function Six(){
    Total += "6";
    console.log(Total);
}
function One(){
    Total += "1";
    console.log(Total);
}
function Two(){
    Total += "2";
    console.log(Total);
}
function Three(){
    Total += "3";
    console.log(Total);
}
function Zer(){
    Total += "0";
    console.log(Total);
}
function Dec(){
    Total += ".";
    console.log(Total);
}

function start(){
    document.getElementById("reset").addEventListener("click", reset,false);
    document.getElementById("Subtract").addEventListener("click", Subtract,false);
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