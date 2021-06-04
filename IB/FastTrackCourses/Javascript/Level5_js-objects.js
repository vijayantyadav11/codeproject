/*
var Stud = new Object();
Stud.Maths = parseInt(readLine().trim());
Stud.Physics = parseInt(readLine().trim());
Stud.Chemistry = parseInt(readLine().trim());
*/

// YOUR CODE GOES HERE
if (Stud.Maths<Stud.Physics){
    if(Stud.Physics < Stud.Chemistry){
        console.log('Chemistry');
        
    }
    else{
        console.log('Physics');
    }
}
else{
    if(Stud.Maths < Stud.Chemistry){
        console.log('Chemistry');
        
    }
    else{
        console.log('Maths');
    }
}





// var Stud = {firstName:"Adarsh", lastName:"Chaudhary", age:21, eyeColor:"black"};   
// var temp = "";  
// for (var x in Stud) {  
//  temp += Stud[x] + " ";  
// }  
// So in temp **Adarsh Chaudhary 21 black** will be stored.