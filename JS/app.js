import { getMitzvas } from "./MitzvahList.js";
/*-------------------------------- Variables --------------------------------*/
const finalMitzvaArray = getMitzvas();
let nounsArray = [];
let verbsArray = [];
//getMitzvas returns 3 random Mitzvos from the Mitzva list

/*-------------------------------- Cached Element references --------------------------------*/

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

const mitzvahMishkebabbleButton = document.querySelector("#mitzvahMishkebabbleButton");



const submitAdjective = document.getElementById("adjectives-button");

const submitNounsButton = document.getElementById("nouns-button");
const nounInp1 = document.getElementById("ninput-1");
const nounInp2 = document.getElementById("ninput-2");
const nounInp3 = document.getElementById("ninput-3");

const submitVerbsButton = document.getElementById("verbs-button");
const verbInp1 = document.getElementById("vinput-1");
const verbInp2 = document.getElementById("vinput-2");
const verbInp3= document.getElementById("vinput-3");


console.log(nounInp1.id);

//input= click --> output --> randomize Mishkabbabler -->into MitzvaSelections []
/*----------------------------- Event Listeners -----------------------------*/
console.log(finalMitzvaArray);

button2.addEventListener("click", () => {
  console.log("Yechi HaMelech");
});
button3.addEventListener("click", () => {
  console.log("Yechi HaMelech");
});
button4.addEventListener("click", () => {
  console.log("Yechi HaMelech");
});

mitzvahMishkebabbleButton.addEventListener("click", () => {
    return getMitzvas();
});

submitNounsButton.addEventListener("click", function (evt) {
    const li1 = document.createElement("li");
    li1.textContent = nounInp1.value;
    document.querySelector("ul").appendChild(li1);

const li2 = document.createElement("li");
    li2.textContent = nounInp2.value;
    document.querySelector("ul").appendChild(li2);

const li3 = document.createElement("li");
    li3.textContent = nounInp3.value;
    document.querySelector("ul").appendChild(li3);

nounsArray.push(nounInp1.value);
nounsArray.push(nounInp2.value);
nounsArray.push(nounInp3.value);

console.log(nounsArray);
});

submitVerbsButton.addEventListener("click", function (evt) {
    const li4 = document.createElement("li");
    li4.textContent = verbInp1.value;
    document.getElementById("verbs-ul").appendChild(li4);

const li5 = document.createElement("li");
    li5.textContent = verbInp2.value;
    document.getElementById("verbs-ul").appendChild(li5);

const li6 = document.createElement("li");
    li6.textContent = verbInp3.value;
    document.getElementById("verbs-ul").appendChild(li6);

verbsArray.push(verbInp1.value);
verbsArray.push(verbInp2.value);
verbsArray.push(verbInp3.value);

console.log(verbsArray);
});