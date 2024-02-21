/* Vytvořte si repozitář ze šablony cviceni-hod-minci. Repozitář obsahuje stránku s nedokončenou simulací hodu mince. Vaším úkolem bude mincí „hodit“.

V souboru index.js si do proměnné padlOrel uložte hodnotu true nebo false na základě náhodné hodnoty z funkce Math.random(). 
Pravděpodobnost 50:50 zajistíte porovnáním výsledku funkce s hodnotou 0.5.

const padlOrel = Math.random() < 0.5;
Pomocí document.querySelector vyberte ze stránky prvek .vysledek a nahraďte jeho obsah textem 
Padl orel nebo Padla panna na základě náhodné hodnoty z předchozího kroku.

if (padlOrel) {
  // Nahraďte text pro orla
} else {
  // Nahraďte text pro pannu
}
Vyzkoušejte stránku několikrát načíst a koukněte, jestli se text mění.

Kromě změny textu ještě přidejte prvku .mince druhou třídu mince--orel nebo mince--panna opět podle hodnoty v proměnné padlOrel.

Znovu několikrát vyzkoušejte, že obrázek mince odpovídá textu pod ním. */

const padlOrel = Math.random() < 0.5
const elementVysledek = document.querySelector(".vysledek")
const mince = document.querySelector(".mince")


if (padlOrel) {
  // Nahraďte text pro orla
  elementVysledek.textContent = "Padlý orel"
  mince.classList.add("mince--orel")
} else {
  // Nahraďte text pro pannu
  elementVysledek.textContent = "Padlá panna"
  mince.classList.add("mince--panna")
}