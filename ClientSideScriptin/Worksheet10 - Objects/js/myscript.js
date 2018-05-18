function Car(make, model, colour, year)
{
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.year = year;
    this.Started = false;
    
    this.Start = function(){
        this.Started = true;
    };
    
    this.Drive = function(){
       
    };
    
    this.Break = function(){
       
    };
    
    this.Stop = function(){
       this.Started = false;
    };  
    
}

var car1 = new Car("Fiat", "Cinquecento", "White", "2017" );
document.getElementById("make_ans").innerHTML = car1.make;
document.getElementById("model_ans").innerHTML = car1.model;
document.getElementById("colour_ans").innerHTML = car1.colour;
document.getElementById("year_ans").innerHTML = car1.year;


function startCar() 
{
    car1.Start();
    alert("Car On");
}

function stopCar()
{
    car1.Stop();
    alert("Car Off");
}

function Person(Fullname, Email, Age, Id)
{
    this.fullname = Fullname;
    this.email = Email;
    this.age = Age;
    this.id = Id;
}
