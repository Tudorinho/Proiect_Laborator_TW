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

function crearetext() {
  var cre = document.createElement("p"); //care e diferenta intre var si const aici?
  cre.innerText =
    "Timp de 3 ani și 3 luni (iunie 1986 - septembrie 1989), Steaua a strâns 104 meciuri fără înfrângere în campionat"; //care e diferenta aici daca folosesc innerText sau innerHTML?
  document.getElementById("creare text js").appendChild(cre);
}

function stergetext() {
  var element = document.getElementById("record1");
  element.remove();
}

function WhichButton(event) {
  var x = event.buttons;
  if (x == 1)
    document.getElementById("al carui fan esti?").innerHTML =
      "stelist -> Bravo!!";
  else if (x == 2)
    document.getElementById("al carui fan esti?").innerHTML =
      "dinamovist -> Nu ai ce cauta aici!";
}

function isKeyPressed(event) {
  var x = document.getElementById("an infiintare fcsb");
  if (event.altKey) {
    x.innerHTML = "Gresit, Dinamo s-a infiintat in 1948, nu Steaua.";
  } else {
    x.innerHTML = "Felicitari! Anul infiintari nu este 1948, este 1947.";
  }
}

function schimbaveteran() {
  document.getElementById("record2").style.border = "2px solid blue";
}

const myTimeout = setTimeout(fortasteaua, 3000);
function fortasteaua() {
  document.getElementById("forta steaua").innerHTML = "Forta Steaua!";
}

clickCounter();
function clickCounter() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("meciuristadion").innerHTML = localStorage.clickcount;
}

function portarfcsb() {
  localStorage.setItem("numele portarului", "Stefan Tarnovanu");
  document.getElementById("numeportar").innerHTML =
    localStorage.getItem("numele portarului");
}

function portaruppercase() {
  let x = localStorage.getItem("numele portarului");
  let y = x.toUpperCase();
  document.getElementById("portar-uc").innerHTML = y;
}

function myFunction() {
  document.getElementById("angheliordanescu").classList.toggle("aiordanescu");
}

function myFunction(event) {
  var x = event.target;
  document.getElementById("tipelement").innerHTML =
    "Este element de tip: " + x.tagName;
}

function albastrufcsb() {
  const element = document.getElementById("albastru-steaua");
  const cssObj = window.getComputedStyle(element, null);
  let bgColor = cssObj.getPropertyValue("background-color");
  document.getElementById("albastruu").innerHTML = bgColor;
}
function rosufcsb() {
  const element = document.getElementById("rosu-steaua");
  const cssObj = window.getComputedStyle(element, null);
  let bgColor = cssObj.getPropertyValue("background-color");
  document.getElementById("rosuu").innerHTML = bgColor;
}

function notFound() {
  window.location.href = "eroare404.html";
}
