for (let x = 100; x <= 200; x++) {
  let message = "";
  if (x[i] % 3 === 0) {
    message += "Loopy";
  }
  if (x[i] % 4 === 0) {
    message += "Lighthouse";
  }
  if (x[i] % 3 === 0 && x % 4 === 0) {
    message += 'LoopyLighthouse';
  }
  console.log(output === "" ? x[i] : output);
};