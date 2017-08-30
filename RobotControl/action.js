function setup(){
    if(cpf)
        var ret = cpf.setPinMode('["resetPin"],["setPinMode", "digital", 4, "OUTPUT"],["setPinMode", "digital", 5, "SERVO"],["setPinMode", "digital", 6, "SERVO"],["setPinMode", "digital", 8, "SERVO"],["setPinMode", "digital", 9, "SERVO"],["setPinMode", "digital", 10, "SERVO"],["setPinMode", "digital", 11, "SERVO"]'); 
}
function myFunction1(){
    document.getElementById("demo").innerHTML="開燈了！";
    cpf.set("socket d4", 1);
    cpf.request ('["digitalwrite", 4, 1]');
    
}
function myFunction2(){
    document.getElementById("demo").innerHTML="關燈了！";
    cpf.set("socket d4", 0);
    cpf.request ('["digitalwrite", 4, 0]');
    
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
function CancelEvent(e) {
  e.preventDefault();
}