const urlEncode = function(text) {
  let ulr = "" 
  if (text[0] !== ' '){
    ulr = text[0]}
    for (let i = 1; i< (text.length-1); i++){
      if (text[i] === " " ? ulr += "%20" : ulr += text[i]);
    }
    if (text[text.length-1] === " " ? ulr += "" : ulr += text[text.length-1])
  return ulr
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));