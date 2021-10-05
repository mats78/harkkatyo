const kangasmäärä1_syöte = document.getElementById('kangasmäärä1_input');
const kangasmäärä2_syöte = document.getElementById('kangasmäärä2_input');
const kangasmäärä3_syöte = document.getElementById('kangasmäärä2_input');
const kangasmäärä4_syöte = document.getElementById('kangasmäärä4_input');
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
    var summa = ( parseFloat(kangas1_hinta) * parseFloat(document.getElementById('kangasmäärä1_input').value) );
    kokonaissumma += summa;

    kangas1_summa.innerHTML = summa + "€";
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";
 });
button2.addEventListener("click", function(event){
    var summa = ( parseFloat(kangas2_hinta) * parseFloat(document.getElementById('kangasmäärä2_input').value) );
    kokonaissumma += summa;

    kangas2_summa.innerHTML = summa + "€";
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€" ;
 });
button3.addEventListener("click", function(event){
    var summa = ( parseFloat(kangas3_hinta) * parseFloat(document.getElementById('kangasmäärä3_input').value) );
    kokonaissumma += summa;
    
    kangas3_summa.innerHTML = summa + "€";
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";
 });
button4.addEventListener("click", function(event){
    var summa = ( parseFloat(kangas4_hinta) * parseFloat(document.getElementById('kangasmäärä4_input').value) );
    kokonaissumma += summa;

    kangas4_summa.innerHTML = summa + "€";
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";
 });
 tyhjää_button.addEventListener("click", function(event){
    kokonaissumma = 0;
    ostoskori_Tuloste.innerHTML = kokonaissumma + "€";
    kangas1_summa.innerHTML = "0€";
    kangas2_summa.innerHTML = "0€";
    kangas3_summa.innerHTML = "0€";
    kangas4_summa.innerHTML = "0€";
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

//korjaa viewport muutos
var viewport = document.querySelector("meta[name=viewport]");
viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);