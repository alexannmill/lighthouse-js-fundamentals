const repeatNumbers = function(data) {
  let array = []
  //loop 1
  for(let i = 0; i < data.legth; i++){
    //loop 2
    for (let x = 0; x < data.legth[i]; x++){
    //replacing with repeat nmber
    array = array.fill(data[0][0],data[0][1])
    // turning array into string
    // return String(array)
    }
    // return repeatData.join(", ")
}      
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
