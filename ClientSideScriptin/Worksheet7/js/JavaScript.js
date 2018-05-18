var count = 0;
document.getElementById("count").innerHTML = count;

function myfunction(input1){
    

    if(document.getElementById(input1).style.backgroundColor == "red")
        {
            document.getElementById(input1).style.backgroundColor = "pink";
        }
    
    else
        
        {
             document.getElementById(input1).style.backgroundColor = "red";
        }
   
}

function hide(){
    var x = document.getElementById("list");
    
    if (x.style.display === "none") 
    {
        x.style.display = "block";
        document.getElementById("myButton").innerHTML="Hide!";
    } 
    else {
        x.style.display = "none";
        document.getElementById("myButton").innerHTML="Show!";
    }
}

function Count(){
    count ++;
    document.getElementById("count").innerHTML = count;
}