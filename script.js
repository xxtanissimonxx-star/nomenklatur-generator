//////////////////////////////
// 🔧 CONFIG (HIER EDITIEREN)
//////////////////////////////


const CONFIG = {
  studiengaenge: ["W2"],

  gruppen: ["A1","A2","A3","B3","B4","C5","C6","EX"],

  aufgaben: [
    { value: "00", text: "Hausaufgabe" },
    { value: "01", text: "1. Normschrift" },
    { value: "02", text: "2. Klauenkupplung" },
    { value: "03", text: "3. Zentrierteil" },
    { value: "04", text: "4. Welle" },
    { value: "05", text: "5. Wellenbaugruppe Schneckengetriebe" }
  ]
};

//////////////////////////////
// 🔧 CONFIG ENDE
//////////////////////////////



function fillSorted(selectId, array) {
  let sorted = [...new Set(array)].sort();
  let select = document.getElementById(selectId);

  sorted.forEach(item => {
    let opt = document.createElement("option");
    opt.text = item;
    opt.value = item;
    select.add(opt);
  });
}

function fillAufgaben() {
  let select = document.getElementById("aufgabe");

  CONFIG.aufgaben.forEach(item => {
    let opt = document.createElement("option");
    opt.value = item.value;
    opt.text = item.text;
    select.add(opt);
  });
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

function generieren() {
  let s = document.getElementById("semester").value;
  let st = document.getElementById("Studiengang_gruppe").value;
  let gr = document.getElementById("gruppe").value;
  let ln = pad(document.getElementById("liste").value);
  let au = document.getElementById("aufgabe").value;
  let tn = pad(document.getElementById("teil").value);
  let ä = document.getElementById("version").value.trim().toUpperCase();

  // 26s-W2 
  // gr → Laborgruppe
  // ln → Listennummer
  // au → Aufgabennummer
  // tn → Teilnummer / Semesterwoche
  // ä → Änderungsversion

  let name = `${s}-${st}${gr}-${ln}-${au}${tn}`;

  if (ä !== "") {
    name += `-${ä}`;
  }

  document.getElementById("output").value = name;
}

function kopieren() {
  let text = document.getElementById("output").value;
  if (text === "") return;

  navigator.clipboard.writeText(text).then(() => {
    document.getElementById("copyStatus").innerText = "Kopiert!";
    setTimeout(() => {
      document.getElementById("copyStatus").innerText = "";
    }, 1500);
  });
}

//////////////////////////////
// 🔧 INIT
//////////////////////////////

window.onload = function() {
  fillSorted("Studiengang_gruppe", CONFIG.studiengaenge);
  fillSorted("gruppe", CONFIG.gruppen);
  fillAufgaben();
};
