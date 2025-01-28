function testaBoleano(a, b) {
   if (a && b) {
      return console.log("Os números são Verdadeiros");
   } else if (!a && !b) {
      return console.log("Os números são Falsos");
   } else {
      return console.log("Um número é verdadeiro e o outro é falso");
   }
}

testaBoleano(true, true);
testaBoleano(false, false);
testaBoleano(true, false);
testaBoleano(false, true);
