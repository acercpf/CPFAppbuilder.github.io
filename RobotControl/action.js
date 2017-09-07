/*
RF=M4
LF=M5
RL=M6
LL=M7
RH=M8
LH=M9
*/
function setup(){
    if(cpf)
        var ret = cpf.setPinMode('["resetPin"],["setPinMode", "digital", 4, "SERVO"],["setPinMode", "digital", 5, "SERVO"],["setPinMode", "digital", 6, "SERVO"],["setPinMode", "digital", 7, "SERVO"],["setPinMode", "digital", 8, "SERVO"],["setPinMode", "digital", 9, "SERVO"],["setPinMode", "digital", 10, "SERVO"],["setPinMode", "digital", 11, "SERVO"]'); 
}

function myFunction3(){
    document.getElementById("demo").innerHTML="放下手";
    cpf.set("socket d10", 0);
    cpf.set("socket d11", 90);
    cpf.request ('["servo_pos", 10, 0],["servo_pos", 11, 90]');
    
}
function myFunction4(){
    document.getElementById("demo").innerHTML="舉起手";
    cpf.set("socket d10", 90);
    cpf.set("socket d11", 0);
    cpf.request ('["servo_pos", 10, 90],["servo_pos", 11, 0]');
    
}
function myFunction5(){
    document.getElementById("demo").innerHTML="單腳站";
    cpf.set("socket d5", 60);
    cpf.set("socket d6", 120);
    cpf.request ('["servo_pos", 5, 60],["servo_pos", 6, 120]');
    
}
function myFunction6(){
    document.getElementById("demo").innerHTML="顛腳尖";
    cpf.set("socket d5", 120);
    cpf.set("socket d6", 60);
    cpf.request ('["servo_pos", 5, 120],["servo_pos", 6, 60]');
    
}
function myFunction7(){
    document.getElementById("demo").innerHTML="校正";
    cpf.set("socket d10", 90);
    cpf.set("socket d11", 0);
    cpf.set("socket d5", 120);
    cpf.set("socket d6", 60); 
    cpf.request ('["servo_pos", 10, 90],["servo_pos", 11, 0],["servo_pos", 5, 120],["servo_pos", 6, 60]');
    cpf.set("socket d10", 0);
    cpf.set("socket d11", 90);
    cpf.set("socket d5", 60);
    cpf.set("socket d6", 120);
    cpf.request ('["servo_pos", 10, 0],["servo_pos", 11, 90],["servo_pos", 5, 60],["servo_pos", 6, 120]');
    
}


function showValue(newValue,moto)
{
	switch (moto) {
    case 1:
        document.getElementById("range1").innerHTML=newValue;
        cpf.set("socket d4", newValue);
        break;
    case 2:
        document.getElementById("range2").innerHTML=newValue;
        cpf.set("socket d5", newValue);
        break;
    case 3:
        document.getElementById("range3").innerHTML=newValue;
        cpf.set("socket d6", newValue);
        break;
    case 4:
        document.getElementById("range4").innerHTML=newValue;
        cpf.set("socket d7", newValue);
        break;
    case 5:
        document.getElementById("range5").innerHTML=newValue;
        cpf.set("socket d8", newValue);
        break;
    case 6:
        document.getElementById("range6").innerHTML=newValue;
        cpf.set("socket d9", newValue);
        break;
    case 7:
        document.getElementById("range7").innerHTML=newValue;
        cpf.set("socket d10", newValue);
        break;
    case 8:
        document.getElementById("range8").innerHTML=newValue;
        cpf.set("socket d11", newValue);
        break;
}
}