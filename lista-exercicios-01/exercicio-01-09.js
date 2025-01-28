function calculaPesoIdeal(nome, sexo, altura) {
   if (sexo === "F") {
      const pesoIdeal = Math.ceil(62.1 * altura - 44.7);
      return console.log(`${nome}, seu peso ideal é ${pesoIdeal}Kg`);
   } else {
      const pesoIdeal = Math.ceil(72.7 * altura - 58);
      return console.log(`${nome}, seu peso ideal é ${pesoIdeal}Kg`);
   }
}

calculaPesoIdeal("Maria", "F", 1.6);
calculaPesoIdeal("Jorge", "M", 1.78);
