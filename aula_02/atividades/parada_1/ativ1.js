let num = Number(prompt('Digite um número'));

const verificaNum = (num) => {

  if (num > 0) {
    return 1;
  } else {
    return 0;
  }
}
console.log(verificaNum(num))