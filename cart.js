const kangasmäärä1_syöte = document.getElementById('kangasmäärä1_input');
const kangasmäärä2_syöte = document.getElementById('kangasmäärä2_input');
const kangasmäärä3_syöte = document.getElementById('kangasmäärä2_input');
const kangasmäärä4_syöte = document.getElementById('kangasmäärä4_input');
const metrit1_tuloste = document.getElementById('metrit1');
const metrit2_tuloste = document.getElementById('metrit2');
const metrit3_tuloste = document.getElementById('metrit3');
const metrit4_tuloste = document.getElementById('metrit4');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const tyhjää_button = document.getElementById('button_tyhjää');
const ostoskori_Tuloste = document.querySelector('#ostokset');

var kangas1_hinta = (document.getElementById('kangas1_hinta').textContent).replace(' €/m', '');
var kangas2_hinta = (document.getElementById('kangas2_hinta').textContent).replace(' €/m', '');
var kangas3_hinta = (document.getElementById('kangas3_hinta').textContent).replace(' €/m', '');
var kangas4_hinta = (document.getElementById('kangas4_hinta').textContent).replace(' €/m', '');
var kangas1_summa = document.getElementById('kangas1_summa');
var kangas2_summa = document.getElementById('kangas2_summa');
var kangas3_summa = document.getElementById('kangas3_summa');
var kangas4_summa = document.getElementById('kangas4_summa');
var kokonaissumma = 0;
var kangasmäärä1 = 1;
var kangasmäärä2 = 1;
var kangasmäärä3 = 1;
var kangasmäärä4 = 1;
var kangas1summa = 0;
var kangas2summa = 0;
var kangas3summa = 0;
var kangas4summa = 0;
var metrit1 = 0;
var metrit2 = 0;
var metrit3 = 0;
var metrit4 = 0;

kangasmäärä1_syöte.addEventListener('input', function(event){
    kangasmäärä1 = parseFloat(kangasmäärä1_syöte.value);  
    //kangasmäärä1_syöte.innerHTML = kangasmäärä1;
});
kangasmäärä2_syöte.addEventListener('input', function(event){
    kangasmäärä2 = parseFloat(kangasmäärä2_syöte.value);     
    //kangasmäärä2_syöte.innerHTML = kangasmäärä2;
});
kangasmäärä3_syöte.addEventListener('input', function(event){
    kangasmäärä3 = parseFloat(kangasmäärä3_syöte.value);     
    //kangasmäärä3_syöte.innerHTML = kangasmäärä3;
});
kangasmäärä4_syöte.addEventListener('input', function(event){
    kangasmäärä4 = parseFloat(kangasmäärä4_syöte.value);     
    //kangasmäärä4_syöte.innerHTML = kangasmäärä4;
});
button1.addEventListener("click", function(event){
    var pituus = parseFloat(document.getElementById('kangasmäärä1_input').value);
    var summa = parseFloat(kangas1_hinta) * pituus;
    metrit1 += pituus;
    kokonaissumma += summa;
    kangas1summa += summa;
    metrit1_tuloste.innerHTML = metrit1 + "m";
    kangas1_summa.innerHTML = kangas1summa + "€";
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";
 });
button2.addEventListener("click", function(event){
    var pituus = parseFloat(document.getElementById('kangasmäärä2_input').value);
    var summa = parseFloat(kangas2_hinta) * pituus;
    metrit2 += pituus;
    kokonaissumma += summa;
    kangas2summa += summa;
    metrit2_tuloste.innerHTML = metrit2 + "m";
    kangas2_summa.innerHTML = kangas2summa + "€";
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";
 });
button3.addEventListener("click", function(event){
    var pituus = parseFloat(document.getElementById('kangasmäärä3_input').value);
    var summa = parseFloat(kangas3_hinta) * pituus;
    metrit3 += pituus;
    kokonaissumma += summa;
    kangas3summa += summa;
    metrit3_tuloste.innerHTML = metrit3 + "m";
    kangas3_summa.innerHTML = kangas3summa + "€";
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";
 });
button4.addEventListener("click", function(event){
    var pituus = parseFloat(document.getElementById('kangasmäärä4_input').value);
    var summa = parseFloat(kangas4_hinta) * pituus;
    metrit4 += pituus;
    kokonaissumma += summa;
    kangas4summa += summa;   
    metrit4_tuloste.innerHTML = metrit4 + "m";
    kangas4_summa.innerHTML = kangas4summa + "€";
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";
 });
 tyhjää_button.addEventListener("click", function(event){
    kokonaissumma = 0;
    kangas1summa = 0;
    kangas2summa = 0;
    kangas3summa = 0;
    kangas4summa = 0;
    metrit1 = 0;
    metrit2 = 0;
    metrit3 = 0;
    metrit4 = 0;
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";
    kangas1_summa.innerHTML = "0€";
    kangas2_summa.innerHTML = "0€";
    kangas3_summa.innerHTML = "0€";
    kangas4_summa.innerHTML = "0€";
    metrit1_tuloste.innerHTML = "0m";
    metrit2_tuloste.innerHTML = "0m";
    metrit3_tuloste.innerHTML = "0m";
    metrit4_tuloste.innerHTML = "0m";
 });

// Localstorage
window.onbeforeunload = function() {
    var data = [kangasmäärä1, kangasmäärä2, kangasmäärä3, kangasmäärä4, kokonaissumma]
    localStorage.setItem("kangasdata", JSON.stringify(data));
};

window.onload = function() {
    var storedData = JSON.parse(localStorage.getItem("kangasdata"));
    kangasmäärä1_syöte.value = storedData[0];
    kangasmäärä2_syöte.value = storedData[1];
    kangasmäärä3_syöte.value = storedData[2];
    kangasmäärä4_syöte.value = storedData[3];
    
    kokonaissumma = storedData[4];
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";     
};

//korjaa viewport muutos kun kännykän näppäimistö näkyvissä
var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);