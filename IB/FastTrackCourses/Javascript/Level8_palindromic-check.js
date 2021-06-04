var st = readLine().trim();
var i=0;
var n = st.length;
for(;i<n ;i++){
    if(st[i]!=st[n-1-i]) break;
}
if(i!=n){
    console.log("No");
}
else{
    console.log("Yes");
}
