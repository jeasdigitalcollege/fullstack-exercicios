function parImpar(a) {
   let resultado = a % 2;
   if (resultado === 0) {
      return console.log(`${a} é um número par`);
   } else {
      return console.log(`${a} é um número ímpar`);
   }
}

parImpar(2);
parImpar(3);
