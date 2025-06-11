let variableSinValor;
let booleano1 = false;
let booleano2 = true;

const PI = 3.14;
const TAU = 6.28;

booleanoAnd = booleano1 && booleano2;
booleanoNot = !booleano1;
booleanoMix0 = booleano1 && booleano2 || booleano1;

incrementarDesp = 2;
resultadoDesp = incrementarDesp++;
incrementarAntes = 2;
resultadoAntes = ++incrementarAntes;

contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
    contarHasta10_2++;
}
postI = 0; postJ = 0;
for (let i = 0; i < 11; i++) {
  postI += postJ++;
}

sumaPares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    }
}

let variableValorNumerico = 10;
const MiNombre = "Fernan";
const MiNumeroFav = 7;


booleanoOr = booleano1 || booleano2;
booleanoMix1 = TAU / 2 === PI || variableValorNumerico >= 7;
seisNoEsNueve = 6 !== 9;
booleanoMix2 = variableValorNumerico > 0 || MiNumeroFav * TAU;

valorSuma = MiNumeroFav + variableValorNumerico;
valorResta = MiNumeroFav - variableValorNumerico;
valorMultiplicacion = MiNumeroFav * variableValorNumerico;
valorDivision = MiNumeroFav / 3;


contarHasta10 = 0;
while (contarHasta10 < 10){
    contarHasta10++;
}

preI = 0; preJ = 0;
for (let i = 0; i < 11; i++) {
  preI += ++preJ;
}

sumaImpares = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;
    }
}

// Hola que tal, soy un comentario de una sola línea
