//distance in km

var distance = 0;
function newDistance () {
   distance = distance + 10;
    console.log(distance);  
    document.getElementById('travelled').innerHTML=distance;
   
   if (distance<180) setTimeout(newDistance,900);

  
}


//atmosphere levels reached
var levels=["Troposphere", "Stratosphere" , "Mesosphere" ,"Thermosphere"];
var index = -1;

function direction(){
index=index+1;
document.getElementById("atmosphere").innerHTML='<i class="fas fa-caret-right"></i>' + levels[index];
if(index==levels.length) index=-1;
setTimeout (direction, 2000);
   
 
}

//fuel left 
var fuel = 100;

function fuelLeft () {
 fuel = fuel - 10; 
    document.getElementById('left').innerHTML=fuel  ;
   
   if (fuel>=10) setTimeout(fuelLeft,500);
   
   else    
       alert('🔥 🔥 🔥 🔥 🔥 YOU ARE GOING TO CRASH  🔥 🔥 🔥 🔥 🔥 ');
    
}




/*FIRST - THE DISTANCE TRAVELLER
/*start at 1 (mln) km and add to it 10 (mln) every 5 sec
it should stop at 174.24 
it should show that it goes from 1 (lmln)
it should show the current value and remove the old value*/

/*--> Tutor/start , end, speed - for loop 


var distanceTravelled =document.getElementById('travelled').innerHTML;
//make a variable that is out of html file to read the "div" , to put it back you do it at the end
distanceTravelled=Number(distanceTravelled); //clearfix to say js use it as a number not a string

for (let i = 0; distanceTravelled < 172; i++){   
   distanceTravelled = distanceTravelled+10; 
    console.log(distanceTravelled);   
 
        document.getElementById('travelled').innerHTML= distanceTravelled; //write the number back to the html
}




//SECOND CURRENT ATMOSPHERE
/* make an array with texts of each of the atmosphere layers
it should go from the [0] to [5] and then stop
it should show text not numbers
it should should show either all the values and the value now(true)would become bigger in size (font) and others will stay as they were in size (font)


//THIRD FUEL LEFT--> add too high too low becomes dengarous/ alert message if it reaches a certain value /true or false/ change the colour font /interact with numbers , combination of two numbers 
should start at 1,892,705 (liters)- write the word liters
then it should go by 10 liters decreasing until it will reach 0 (or false)

 */