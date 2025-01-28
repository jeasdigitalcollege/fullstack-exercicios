function classifica(a, b, c) {
   let primeiro, segundo, terceiro;

   if (a === b || a === c || b === c) {
      console.log("Os números devem ser diferentes.");
      return;
   }

   if (a > b && a > c) {
      primeiro = a;

      if (b > c) {
         segundo = b;
         terceiro = c;
      } else {
         segundo = c;
         terceiro = b;
      }
   } else {
      if (b > a && b > c) {
         primeiro = b;

         if (a > c) {
            segundo = a;
            terceiro = c;
         } else {
            segundo = c;
            terceiro = a;
         }
      } else {
         primeiro = c;

         if (a > b) {
            segundo = a;
            terceiro = b;
         } else {
            segundo = b;
            terceiro = a;
         }
      }
   }

   console.log(primeiro, segundo, terceiro);
}

classifica(1, 2, 3);
classifica(1, 3, 2);
classifica(2, 1, 3);
classifica(2, 3, 1);
classifica(3, 1, 2);
classifica(3, 2, 1);
classifica(1, 1, 1);
