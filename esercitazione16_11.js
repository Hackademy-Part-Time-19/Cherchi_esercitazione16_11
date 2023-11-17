function traccia1() {
  let nomiStudenti = [
    "Franco",
    "Gennaro",
    "Valerio",
    "Giulia",
    "Eugenio",
    "Angela",
  ];

  for (let i = 0; i < nomiStudenti.length; i++) {
    console.log(nomiStudenti[i]);
  }
}

function traccia2() {
  let listaStudenti = [
    "Franco",
    "Gennaro",
    "Valerio",
    "Giulia",
    "Eugenio",
    "Angela",
  ];

  for (let i = 0; i < listaStudenti.length; i++) {
    for (let j = 0; j < listaStudenti[i].length; j++) {
      console.log(listaStudenti[i][j]);
    }
  }
}

function traccia3() {
  let sommaNumeri = 0;

  for (let i = 1; i <= 200; i++) {
    sommaNumeri += i;
  }
  console.log("La somma cumulativa dei numeri è: " + sommaNumeri);
}

function traccia4() {
  for (let j = 1; j <= 400; j++) {
    if (j % 20 === 0)
      console.log("Questo numero: " + j + " è divisibile per 20.");
  }
}

console.log("Eseguo taccia 1");
traccia1();
console.log("\nEseguo taccia 2");
traccia2();
console.log("\nEseguo taccia 3");
traccia3();
console.log("\nEseguo taccia 4");
traccia4();
