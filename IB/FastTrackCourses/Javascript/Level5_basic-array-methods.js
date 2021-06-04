var size1 = parseInt(readLine().trim());
var A = []
for(var i = 0 ; i < size1; i++ ){
    var x = parseInt(readLine().trim());
    A.push(x);
}
var size2 = parseInt(readLine().trim());
var B = []
for(var i = 0 ; i < size2; i++ ){
    var x = parseInt(readLine().trim());
    B.push(x);
}
// YOUR CODE GOES HERE
var tmp = A[0];
A.shift();
B.push(tmp);
var res = A.concat(B);
for(var i=0; i< (size1 + size2); i++){
    console.log(res[i]);
}




// toString()

// The JavaScript method toString() converts an array to a string of (comma separated) array values.


// join():

// This method also joins all array elements into a string but in addition here we can specify the separator.


// push():

// This method adds a new element to an array (at the end):


// pop():

// This method removes the last element from an array.


// shift():

// This method removes the first array element and “shifts” all other elements to a lower index.


// unshift():

// This method adds a new element to an array (at the beginning), and “unshifts” older elements:


// concat():

// This method creates a new array by merging (concatenating) existing arrays.
