var size_ = parseInt(readLine().trim());
var array_ = []
for(var i = 0 ; i < size_; i++ ){
    var x = parseInt(readLine().trim());
    array_.push(x);
}
// YOUR CODE GOES HERE
array_.sort(function(a,b){return a-b})
for(var i=0; i<size_ ; i++){
    console.log(array_[i])
}




// In JavaScript, we have a couple of more methods to sort the array, find min/max in the array, reverse the array, etc. These are very much useful while solving complex programming questions. Let us see them one by one:

// sort():
// reverse():
// Compare Function

// Using compare function we may define our own sorting order over the elements. The compare function should return a negative, zero, or positive value, depending on the arguments.

// Let us take an example to understand it. If we sort the array of numbers then it will not be sorted mathematically but lexicographically. Suppose we want to make a compare function to sort them in increasing order mathematically.

// The required function will be: function(a, b){return a - b} and to sort using it we will write array.sort(function(a, b){return a - b}).

// The compare function compares all the values in the array, two values at a time (a, b) and

// If the result is negative a is sorted before b
// If the result is positive b is sorted before a
// If the result is 0 no changes are done with the sort order of the two values.
// Finding max of an array:

// We may use Math.max.apply to find the highest number in an array.

// Finding min of an array:

// We may use Math.min.apply to find the lowest number in an array.