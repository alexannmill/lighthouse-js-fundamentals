const conditionalSum = function(values, condition) {
  let evenNum = 0
  let oddNum= 0
  let num = 0
  for(i= 0; i<values.length; i++){
    if(condition === "even" && values[i] % 2 === 0){
      num += values[i]
    }
      else if (condition === "odd" && values[i] % 3 === 0 || values[i]  === 1){
      num += values[i]
      }
        else { "0"
        }
  }
  return num
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));