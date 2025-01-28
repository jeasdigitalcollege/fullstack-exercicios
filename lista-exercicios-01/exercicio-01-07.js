function testaNumero(a) {
   let parImpar = a % 2;
   let resultado = 0;
   let nome = "";

   if (parImpar === 0) {
      nome = "Par";
      resultado = a + 5;
   } else {
      nome = "Impar";
      resultado = a + 8;
   }

   return console.log(`Resultado ${nome} ${resultado}`);
}

testaNumero(2);
testaNumero(5);
