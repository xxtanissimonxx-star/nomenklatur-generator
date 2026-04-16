//////////////////////////////
// 🔧 CONFIG (HIER EDITIEREN)
//////////////////////////////

const CONFIG = {
  studiengaenge: ["W2"],

  gruppen: ["A2","A1","B3","B4","C5","C6","D7","EX"],

  aufgaben: [
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
  let g = document.getElementById("gruppe").value;
  let l = pad(document.getElementById("liste").value);
  let a = document.getElementById("aufgabe").value;
  let t = pad(document.getElementById("teil").value);
  let v = document.getElementById("version").value.trim().toUpperCase();

  if (a === "01" || a === "02") {
    t = "00";
  }

  let name = `${s}-${st}${g}-${l}-${a}${t}`;

  if (v !== "") {
    name += `-${v}`;
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

fillSorted("Studiengang_gruppe", CONFIG.studiengaenge);
fillSorted("gruppe", CONFIG.gruppen);
fillAufgaben();


window.onload = function() {
  fillSorted("Studiengang_gruppe", CONFIG.studiengaenge);
  fillSorted("gruppe", CONFIG.gruppen);
  fillAufgaben();
};
