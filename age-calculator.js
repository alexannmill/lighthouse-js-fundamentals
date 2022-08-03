let name = ""  ;
let yearOfBirth ; 
let currentYear = 2022;
function ageCalculator(name, yearOfBirth, currentYear){
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}
console.log(ageCalculator())
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));