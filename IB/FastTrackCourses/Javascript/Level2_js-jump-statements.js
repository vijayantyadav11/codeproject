var num = parseInt(readLine().trim());
// YOUR CODE GOES HERE
for(var i=0; ;i++){
    if(i==num) break;
    if(i%2 ==0) continue;
    
    console.log(i);
}