function calculaIMC(nome, peso, altura) {
   const IMC = peso / altura ** 2;
   let mensagem;

   switch (true) {
      case IMC < 18.5:
         mensagem = "Abaixo do peso";
         break;
      case IMC >= 18.5 && IMC <= 25:
         mensagem = "Peso normal";
         break;
      case IMC > 25 && IMC <= 30:
         mensagem = "Acima do Peso";
         break;
      case IMC > 30:
         mensagem = "Obeso";
         break;
      default:
         mensagem = "IMC inválido";
         break;
   }

   return console.log(`${nome}, seu IMC é ${IMC.toFixed(1)} (${mensagem})`);
}

calculaIMC("Maria", 70, 1.6);
calculaIMC("Jorge", 82, 1.78);
