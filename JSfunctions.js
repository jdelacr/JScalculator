



function reset(){
    console.log("reset has been pressed");
}

function start(){
    document.getElementById("reset").addEventListener("click", reset,false);
    document.getElementById("Subtract").addEventListener("click", subtract,false);
    document.getElementById("Addition").addEventListener("click", reset,false);
    document.getElementById("Multiply").addEventListener("click", reset,false);
    document.getElementById("Division").addEventListener("click", reset,false);
    document.getElementById("Equal").addEventListener("click", reset,false);
    document.getElementById("Seven").addEventListener("click", reset,false);
    document.getElementById("Eight").addEventListener("click", reset,false);
    document.getElementById("Nine").addEventListener("click", reset,false);
    document.getElementById("Four").addEventListener("click", reset,false);
    document.getElementById("Five").addEventListener("click", reset,false);
    document.getElementById("Six").addEventListener("click", reset,false);
    document.getElementById("One").addEventListener("click", reset,false);
    document.getElementById("Two").addEventListener("click", reset,false);
    document.getElementById("Three").addEventListener("click", reset,false);
    document.getElementById("Decimal").addEventListener("click", reset,false);
    document.getElementById("Zero").addEventListener("click", reset,false);


}

window.addEventListener("load",start,false);