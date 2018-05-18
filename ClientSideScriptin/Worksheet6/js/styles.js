var x;
var y;

this.onload = function load(){
      x = parseInt(prompt("Please enter the first value", "")); 
      y = parseInt(prompt("Please enter the second value", ""));
}

function addition(){
    var ans = x+y;
    document.getElementById("add_ans").innerHTML +=" " + ans;
}

function subtraction(){
    var ans = x-y
    document.getElementById("sub_ans").innerHTML +=" " + ans;
}

function multiplication(id){
    var ans = x*y
    document.getElementById(id).innerHTML +=" " + ans;
}

function div(){
    var ans = (x/y).toFixed(2);
    document.getElementById("dividing_ans").innerHTML +=" " + ans;
}

function pow(){
    var ans = Math.pow(x, y);
    document.getElementById("power_ans").innerHTML +=" " + ans;
}

function mod(){
    var ans = x%y;
    document.getElementById("modules_ans").innerHTML +=" " + ans;
}

function sp(){
    var ans = x*4;
    document.getElementById("SPeremeter_ans").innerHTML +=" " + ans;
}