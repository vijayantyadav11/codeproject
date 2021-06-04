var size_ = parseInt(readLine().trim());
var array_ = []
for(var i = 0 ; i < size_; i++ ){
    var x = parseInt(readLine().trim());
    array_.push(x);
}
// YOUR CODE GOES HERE
var new_arr = [];
for(var i = 0 ; i < size_; i++ ){
    new_arr.push(array_[i]+i);
    console.log(new_arr[i]);
}



// Creating Arrays in JavScript:

// Using an array literal: var array_name = [item1, item2, …];

// Using JS Keywaord new: var array_name = new Array(“item1”, “item2”, …);