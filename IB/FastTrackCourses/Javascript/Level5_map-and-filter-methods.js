var size_ = parseInt(readLine().trim());
var A = []
for(var i = 0 ; i < size_; i++ ){
    var x = parseInt(readLine().trim());
    A.push(x);
}
// YOUR CODE GOES HERE
var B = A.map(myFunction);
function myFunction(num){
    return num * 2 ;
}

var C = B.filter(filFunction);
function filFunction(val){
    if( val%8 == 0 ) { return true;}
    else return false;
}
for(var i=0; i< C.length ; i++){
    console.log(C[i]);
}





// Syntax: array.filter(callback(element, index, arr), thisValue)
// where,

// callback: This parameter holds the function to be called for each element of the array.
// element: The parameter holds the value of the elements being processed currently.
// index: This parameter is optional, it holds the index of the current value element in the array starting from 0.
// arr: This parameter is optional, it holds the complete array on which Array.filter() is called.
// thisValue: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.
// This method returns a new array consisting of only those elements that satisfied the condition of the arg_function.

// Syntax: array.map(callback(element, index, arr), thisValue)
// where,

// callback: This parameter holds the function to be called for each element of the array.
// element: The parameter holds the value of the elements being processed currently.
// index: This parameter is optional, it holds the index of the current value element in the array starting from 0.
// arr: This parameter is optional, it holds the complete array on which Array.map() is called.
// thisValue: This parameter is optional, it holds the context to be passed as this to be used while executing the callback function. If the context is passed, it will be used like this for each invocation of the callback function, otherwise undefined is used as default.
// This method returns a new array consisting of only those elements that satisfied the condition of the arg_function.