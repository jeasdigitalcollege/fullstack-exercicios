import readlineSync from "readline-sync";

function verificaEstadoCivil(nome, sexo, estadoCivil) {
   if (sexo === "F" && estadoCivil === "CASADA") {
      let tempo = readlineSync.question(
         `${nome}, informe o seu tempo de casado(a): `
      );
      return console.log(`${nome}, você tem ${tempo} anos de casada`);
   } else {
      return console.log(
         `${nome}, seus parâmetros não atenderam à condição do If`
      );
   }
}

verificaEstadoCivil("Maria", "F", "CASADA");

verificaEstadoCivil("Jorge", "M", "CASADO");
