function product (V1, V2) {
    let x=0;
    if (V1.length==V2.length) {
        for (let i=0; i<V1.length; i++) {
           x= x+ V1[i]*V2[i]
        }
    }
    return x;
}

let bool= false;
if ( product([1,2,5],[1,1,5])===0) {
  bool= true 
} else {
   bool=false;
}
console.log(bool)