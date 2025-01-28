function calcula(a, b) {
   let c = 0;
   let operacao = "";
   if (a === b) {
      operacao = "Soma";
      c = a + b;
   } else {
      operacao = "Multiplicação";
      c = a * b;
   }
   return console.log(`${operacao}: ${c}`);
}

calcula(2, 2);
calcula(1, 3);
