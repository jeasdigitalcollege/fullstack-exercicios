function testaNumero(a) {
   if (a > 0) {
      return console.log(`[${a}] é um número positivo. Resultado: ${a * 2}`);
   } else {
      return console.log(`[${a}] é um número negativo. Resultado: ${a * 3}`);
   }
}

testaNumero(2);
testaNumero(-3);
