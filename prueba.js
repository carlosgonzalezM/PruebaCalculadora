function button9(){
    document.getElementById("text").value += 9;
}

function button8(){
    document.getElementById("text").value += 8;
}

function button7(){
    document.getElementById("text").value += 7;
}

function button6(){
    document.getElementById("text").value += 6;
}

function button5(){
    document.getElementById("text").value += 5;
}

function button4(){
    document.getElementById("text").value += 4;
}

function button3(){
    document.getElementById("text").value += 3;
}

function button2(){
    document.getElementById("text").value += 2;
}

function button1(){
    document.getElementById("text").value += 1;
}

function button0(){
    document.getElementById("text").value += 0;
}


function buttonP(){
    document.getElementById("text").value += "." ;
}

function buttonSum(){
    document.getElementById("text").value += "+" ;
}

function buttonRes(){
    document.getElementById("text").value += "-" ;
}

function buttonProd(){
    document.getElementById("text").value += "*" ;
}

function buttonDiv(){
    document.getElementById("text").value += "/" ;
}

function buttonPorc(){
    document.getElementById("text").value += "%" ;
}

function buttonAC(){
    document.getElementById("text").value="";
}

function buttonMasMen(){
    document.getElementById("text").value*=-1;
}

function resultado(){
    var expresion = document.getElementById("text").value;

    document.getElementById("text").value=eval(expresion);
}