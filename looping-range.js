// function range(start,end,step){
//   let num= [];
//   while (start <= end){
//     num.push(start);
//     start=  start + step;
//   }
//   return num;
// }
// for( let i = 0; i <= end; i + step){
//   num.push(start)
//   start = start + step
// }
// return num;
// }
function range (start, end, step) {
  let num = [];
  if( start === null || end === null || step === null || end < start || step < 0 ){
    num = [];
  } else {
    for(let i = start; i <= end; i = i + step){
        num.push(i);
      }
  }
  return num;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));