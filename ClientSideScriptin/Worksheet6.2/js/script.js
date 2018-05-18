var userIn;

function load(){
    userIn = prompt("Please enter the first value", "");
    document.getElementById("userInput").innerHTML +=" " + userIn;
    
    
    document.getElementById("parseInt").innerHTML = parseInt(userIn);
    

    document.getElementById("ceil").innerHTML = Math.ceil(userIn);
    

    document.getElementById("floor").innerHTML = Math.floor(userIn);
    

    document.getElementById("round").innerHTML = Math.round(userIn);
}
