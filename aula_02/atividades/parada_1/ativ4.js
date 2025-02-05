const dobro = (numero) => numero * 2;
const triplo = (numero) => numero * 3;

const dobroTriplo = (numero, fun1, fun2) => {
    console.log(`O dobro do ${numero} é ${fun1(numero)}, o triplo ${fun2(numero)}`);
}
dobroTriplo(2, dobro, triplo);
