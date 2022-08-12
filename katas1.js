const sumLargestNumbers = function(data) {
  var firstNum=0;
  var secLargest=0;
  for (let i=0; i<data.length; i++){
    if (data[i] > firstNum){
      secLargest = firstNum;
      firstNum = data[i];
    } else if (data[i] > secLargest) {
      secLargest = data[i];
    }
  }
  return (Number(firstNum) + Number(secLargest));
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));