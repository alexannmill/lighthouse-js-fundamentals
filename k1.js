const sumLargestNumbers = function(data) {
 let largeNum = 0
 let secNum =0
 for(let i = 0; i < data.length; i++){
  if (data[i]> largeNum){
    secNum= largeNum
    largeNum = data[i]
  }
  else if(data[i] > secNum) {
   secNum = data[i]
  }
 }
return (Number(largeNum) + Number(secNum))
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));