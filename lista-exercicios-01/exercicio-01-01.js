function soma(a, b, c) {
   const soma = a + b;

   if (soma > c) {
      return console.log(`${soma} > ${c}`);
   } else {
      return console.log(`${soma} < ${c}`);
   }
}

soma(2, 3, 4);
soma(1, 1, 3);
