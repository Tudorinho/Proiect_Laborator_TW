function schimbastadion() {
  document.getElementById("stadionfcsb").innerHTML =
    "FCSB evolueaza acum pe Arena Nationala.";
}

function schimbaparagrafe() {
  lista = document.getElementsByTagName("p");
  for (var p of lista) {
    p.style.color = "red";
  }
}

function schimbacoeficient() {
  lista = document.getElementsByClassName("coeficient");
  for (let i = 0; i < lista.length; i++) {
    lista[i].style.color = "lightblue";
  }
}
