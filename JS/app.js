import { getMitzvas } from "./MitzvahList.js";
/*-------------------------------- Variables --------------------------------*/
const finalMitzvaArray = getMitzvas();

/*-------------------------------- Cached Element references --------------------------------*/

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");

const mitzvahMishkebabbleButton = document.querySelector(
  "#mitzvahMishkebabbleButton"
);

const readStoryButton = document.querySelector("#readstory")


const nounsForm = document.getElementById("nouns-form");
const nounsContainer= document.getElementById("main-nouns-input")
const nounsFormInputEls = document.querySelectorAll(".noun-group-input");
const nounsButton = document.getElementById("nouns-button")


const verbsForm = document.getElementById("verbs-form");
const verbsFormInputEls = document.querySelectorAll(".verb-group-input");
const verbsContainer = document.getElementById("main-verbs-input")

const adjForm = document.getElementById("adj-form");
const adjFormInputEls = document.querySelectorAll(".adj-group-input");
const adjContainer = document.getElementById("main-adjectives-input")

const nameForm = document.getElementById ("name-form");
const nameFormInputEls = document.querySelector(".name-form-input");
const nameContainer = document.getElementById("main-name-input")

const cardsContainer = document.getElementById("cards")

/*----------------------------- Event Listeners -----------------------------*/
button1.addEventListener("click", fillStory)
  

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
     getMitzvas();
     toggleMitzvaButton()
     toggleReadButton()
});

//once story is chosen, produce first form

//functions for each form
//nouns display
function displayNounForm(){
  // console.log(nounsContainer)
  nounsContainer.style.display="flex"
}
function hideNounForm(){
  nounsContainer.style.display="none"
}
//verbs display
function displayVerbForm(){
  verbsContainer.style.display="flex"
}
function hideVerbsForm(){
  verbsContainer.style.display="none"
}
//adj display
function displayAdjForm(){
  adjContainer.style.display="flex"
}
function hideAdjForm(){
  adjContainer.style.display="none"
}

function displayNameForm(){
  nameContainer.style.display=("flex")
}

function hideNameForm(){
  nameContainer.style.display=("none")
}


function toggleMitzvaButton(){
  mitzvahMishkebabbleButton.toggleAttribute("hidden")
}
function toggleReadButton (){
  readStoryButton.toggleAttribute("hidden")
}

function toggleNounSubmit (){
  readStoryButton.toggleAttribute("hidden")
}

//cards display
function displayCards(){
  cardsContainer.style.display=('flex')
}

function empty() {
  alert("Please complete all fields");
  return false;
};

//fill out noun form and put into noun array
nounsForm.addEventListener("submit", getNounInputValues);
const nounFormValues = [];
function getNounInputValues(evt) {
evt.preventDefault()
nounsFormInputEls.forEach((nounsFormInputEl) => {
    if (nounsFormInputEl.value === ""){
        empty()}
      else {
    const nounInput = nounsFormInputEl.value;
    nounFormValues.push(nounInput);
    
    hideNounForm()
    displayVerbForm()
    console.log(nounFormValues)
    
}});
}
//fill out verb form
verbsForm.addEventListener("submit", getInputValues);
const verbFormValues = [];
function getInputValues(evt) {
evt.preventDefault()
    verbsFormInputEls.forEach((verbsFormInputEl) => {
        if (verbsFormInputEl.value === ""){
        return alert ("Please submit 3 verbs!")}
        else {
    const input = verbsFormInputEl.value;
    verbFormValues.push(input);
    hideVerbsForm()
    displayAdjForm()
    console.log(verbFormValues)
  }});
}

//fill out adj form
adjForm.addEventListener("submit", getAdjInputValues);
const adjFormValues = [];
function getAdjInputValues(evt) {
evt.preventDefault()
adjFormInputEls.forEach((adjFormInputEl) => {
    if (adjFormInputEl.value === ""){
    return alert ("Please submit 3 adjectives!")}
    else {const adjInput = adjFormInputEl.value;
    adjFormValues.push(adjInput);
    hideAdjForm()
    displayNameForm()
    console.log(adjFormValues)
}});
}
//fill out name form
nameForm.addEventListener("submit", getNameInputValues);
const nameFormValues = []
function getNameInputValues(evt) {
    evt.preventDefault()
         if (nameFormInputEls.value === ""){
            return alert ("Please submit a name!")}
        else {
        const nameInput = nameFormInputEls.value;
        nameFormValues.push(nameInput);
        hideNameForm()
        toggleMitzvaButton()
        console.log(nameFormValues)
    }
};

readStoryButton.addEventListener("click", fillStory);

function fillStory() {
  let firstNoun = nounFormValues[Math.floor(Math.random() * nounFormValues.length)]
  let secondNoun = nounFormValues[Math.floor(Math.random() * nounFormValues.length)]
  let thirdNoun = nounFormValues[Math.floor(Math.random() * nounFormValues.length)]
  let firstVerb = verbFormValues[Math.floor(Math.random() * verbFormValues.length)]
  let secondVerb = verbFormValues[Math.floor(Math.random() * verbFormValues.length)]
  let thirdVerb = verbFormValues[Math.floor(Math.random() * verbFormValues.length)]
  let firstAdj = adjFormValues[Math.floor(Math.random() * adjFormValues.length)]
  let secondAdj = adjFormValues[Math.floor(Math.random() * adjFormValues.length)]
  let thirdAdj = adjFormValues[Math.floor(Math.random() * adjFormValues.length)]
  let firstMitzva = finalMitzvaArray[0]
  let secondMitzva = finalMitzvaArray[1]
  let thirdMitzva = finalMitzvaArray[2]
  let boysName = nameFormValues
  
  
  let story= `Purim was always fun for ${boysName}. He loved going to Shul to hear the ${firstMitzva} read and see all his ${firstNoun} from school. 
  He especially loved ${firstVerb} in a costume and seeing all of his friends' different costumes. 
  This year, however, he was very sad because there was a ${secondNoun} called Carona which made people ${secondVerb} their own ${thirdNoun}.
   It was really ${firstAdj} for ${boysName}
   Nevertheless, ${boysName} knew that simcha poretz geder (“joy breaks boundaries”) so he decided to be happy. 
   Right when he decided to be happy, he started to ${thirdVerb}  which was very ${secondAdj} to everyone watching. 
   His mother told him, ${boysName} you must eat these ${thirdAdj} ${secondMitzva} I baked for you! They are in the shape of Haman/’s hat! 
   Then you can go with your father to give ${thirdMitzva}  to the needy -  HaShem wants everyone to be happy on Purim!”`
     console.log(story)
   toggleReadButton()
     return alert (story)
}





  