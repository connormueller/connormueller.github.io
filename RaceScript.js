var running = false;
var reset = true;
var car1Left = 0;
var car2Left = 0;
var car3Left = 0;
var car1Amt = 0;
var car2Amt = 0;
var car3Amt = 0;
var rand = 0;
var speed = window.innerWidth / 20;
var finish = window.innerWidth - 100;
var accel = 25;
var buffer = 2; 
var cars = document.getElementsByClassName("car");
var carImgs = document.getElementsByClassName("carImg");

function DynamicSizes()
{
    var carDim = window.innerHeight * .13;
    for (i = 0; i < cars.length; i++)
    {
        cars[i].style.width = carDim.toString() + "px";
        cars[i].style.height = carDim.toString() + "px";
        carImgs[i].style.width = carDim.toString() + "px";
        carImgs[i].style.height = carDim.toString() + "px";
    }   
}

function GameStarted()
{
    if (!running && reset)
    {     
        speed = window.innerWidth / 20;
        finish = window.innerWidth - 100;

        car1Left = 0;
        car2Left = 0;
        car3Left = 0;
        car1Amt = 0;
        car2Amt = 0;
        car3Amt = 0;
        rand = 0;

        reset = false;
        running = true;

        document.getElementById("message").style.visibility = "hidden";
        document.getElementById("startButton").style.backgroundImage = "greenlight.jpg";
        document.getElementById("car1img").src = "car1.jpg";
        document.getElementById("car2img").src = "car2.jpg";
        document.getElementById("car3img").src = "car3.jpg";
        

        loop();
    }
}

function Reset() 
{
    if (!reset)
    {
        reset = true;

        for (i = 0; i < cars.length; i++)
        {
            cars[i].style.left = "0%";           
        }

        document.getElementById("message").style.visibility = "hidden";
    }
}


function loop()
{
    if (running)
    { 
        setTimeout(function ()
        {
            MoveCars();
            speed += accel;
            rand = 500;
            loop();          
        }, rand);            
    }
};

function MoveCars()
{
    
    if (car1Left < finish && car2Left < finish && car3Left < finish) {
        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < car1Amt)
        {
            amt = car1Amt + 2;
        }
        car1Left += amt;
        car1Amt = amt;
        document.getElementById("car1").style.left = car1Left.toString() + "px";
        document.getElementById("car1").style.right = (document.getElementById("car1").style.right - amt).toString() + "px";

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < car2Amt)
        {
            amt = car2Amt + 2;
        }
        car2Left += amt;
        car2Amt = amt;
        document.getElementById("car2").style.left = car2Left.toString() + "px";
        document.getElementById("car2").style.right = (document.getElementById("car2").style.right - amt).toString() + "px";

        var amt = Math.round(Math.random() * speed + buffer);
        if (amt < car3Amt) 
        {
            amt = car3Amt + 2;
        }
        car3Left += amt;
        car3Amt = amt;
        document.getElementById("car3").style.left = car3Left.toString() + "px";
        document.getElementById("car3").style.right = (document.getElementById("car3").style.right - amt).toString() + "px";

    

        
        
       
    }

    else {
        running = false;
        document.getElementById("startButton").style.backgroundImage = "redlight.png";
        document.getElementById("message").style.visibility = "visible";
        document.getElementById("message").style.border = "solid 2px #7AE7C7";
        document.getElementById("car1img").src = "car1.jpg";
        document.getElementById("car2img").src = "car2.jpg";
        document.getElementById("car3img").src = "car3.jpg";

        var winner = Math.max(car1Left, car2Left, car3Left);

        if (car1Left == winner) {
            document.getElementById("message").innerText = "Car 1 wins! To reset press here.";
            
        } else if (car2Left == winner) {
            document.getElementById("message").innerText = "Car 2 wins! To reset press here.";
            
        } else if (car3Left == winner) {
            document.getElementById("message").innerText = "Car 3 wins! To reset press here.";
            
        
        }         
        
    }
}
