import { getMitzvas } from "./MitzvahList.js";
/*-------------------------------- Variables --------------------------------*/
const finalMitzvaArray = getMitzvas();

/*-------------------------------- Cached Element references --------------------------------*/

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const paragraphStory = document.getElementById("story");
const resetButton = document.getElementById("reset");

const mitzvahMishkebabbleButton = document.querySelector(
  "#mitzvahMishkebabbleButton"
);

const readStoryButton = document.querySelector("#readstory");

const nounsForm = document.getElementById("nouns-form");
const nounsContainer = document.getElementById("main-nouns-input");
const nounsFormInputEls = document.querySelectorAll(".noun-group-input");

const verbsForm = document.getElementById("verbs-form");
const verbsFormInputEls = document.querySelectorAll(".verb-group-input");
const verbsContainer = document.getElementById("main-verbs-input");

const adjForm = document.getElementById("adj-form");
const adjFormInputEls = document.querySelectorAll(".adj-group-input");
const adjContainer = document.getElementById("main-adjectives-input");

const nameForm = document.getElementById("name-form");
const nameFormInputEls = document.querySelector(".name-form-input");
const nameContainer = document.getElementById("main-name-input");

const cardsContainer = document.getElementById("cards");

/*----------------------------- Event Listeners -----------------------------*/
button1.addEventListener("click", fillStory1);

button2.addEventListener("click", fillStory2);
button3.addEventListener("click", fillStory3);
button4.addEventListener("click", fillstory4);

mitzvahMishkebabbleButton.addEventListener("click", () => {
  getMitzvas();
  hideMitzvaButton();
  displayCards();
});

//nouns display
function displayNounForm() {
  // console.log(nounsContainer)
  nounsContainer.style.display = "flex";
}

function hideNounForm() {
  nounsContainer.style.display = "none";
}
//verbs display
function displayVerbForm() {
  verbsContainer.style.display = "flex";
}

function hideVerbsForm() {
  verbsContainer.style.display = "none";
}
//adj display
function displayAdjForm() {
  adjContainer.style.display = "flex";
}

function hideAdjForm() {
  adjContainer.style.display = "none";
}

function displayNameForm() {
  nameContainer.style.display = "flex";
}

function hideNameForm() {
  nameContainer.style.display = "none";
}

function showMitzvaButton() {
  mitzvahMishkebabbleButton.style.display = "flex";
}

function hideMitzvaButton() {
  mitzvahMishkebabbleButton.style.display = "none";
}

//cards display
function displayCards() {
  cardsContainer.style.display = "flex";
}

function empty() {
  alert("Please complete all fields");
  return false;
}

//fill out noun form and put into noun array
nounsForm.addEventListener("submit", getNounInputValues);
const nounFormValues = [];

function getNounInputValues(evt) {
  evt.preventDefault();
  nounsFormInputEls.forEach((nounsFormInputEl) => {
    if (nounsFormInputEl.value === "") {
      empty();
    } else {
      const nounInput = nounsFormInputEl.value;
      nounFormValues.push(nounInput);

      hideNounForm();
      displayVerbForm();
      console.log(nounFormValues);
    }
  });
}
//fill out verb form
verbsForm.addEventListener("submit", getInputValues);
const verbFormValues = [];

function getInputValues(evt) {
  evt.preventDefault();
  verbsFormInputEls.forEach((verbsFormInputEl) => {
    if (verbsFormInputEl.value === "") {
      empty();
    } else {
      const verbInput = verbsFormInputEl.value;
      verbFormValues.push(verbInput);
      hideVerbsForm();
      displayAdjForm();
      console.log(verbFormValues);
    }
  });
}

//fill out adj form
adjForm.addEventListener("submit", getAdjInputValues);
const adjFormValues = [];

function getAdjInputValues(evt) {
  evt.preventDefault();
  adjFormInputEls.forEach((adjFormInputEl) => {
    if (adjFormInputEl.value === "") {
      return alert("Please submit 3 adjectives!");
    } else {
      const adjInput = adjFormInputEl.value;
      adjFormValues.push(adjInput);
      hideAdjForm();
      displayNameForm();
      console.log(adjFormValues);
    }
  });
}
//fill out name form
nameForm.addEventListener("submit", getNameInputValues);
const nameFormValues = [];

function getNameInputValues(evt) {
  evt.preventDefault();
  if (nameFormInputEls.value === "") {
    return alert("Please submit a name!");
  } else {
    const nameInput = nameFormInputEls.value;
    nameFormValues.push(nameInput);
    showMitzvaButton();
    hideNameForm();

    console.log(nameFormValues);
  }
}

button1.addEventListener("click", fillStory1);

function fillStory1() {
  let firstNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let secondNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let thirdNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let firstVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let secondVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let thirdVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let firstAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let secondAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let thirdAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let firstMitzva = finalMitzvaArray[0];
  let secondMitzva = finalMitzvaArray[1];
  let thirdMitzva = finalMitzvaArray[2];
  let boysName = nameFormValues;

  let story1 = `Purim was always fun for ${boysName}. He loved going to Shul to hear the ${firstMitzva} read and see all his ${firstNoun} from school. 
  
  He especially loved ${firstVerb} in a costume and seeing all of his friends' different costumes. 
  
  This year, however, he was very sad because there was a ${secondNoun} called Carona which made people ${secondVerb} their own ${thirdNoun}.
  
  It was really ${firstAdj} for ${boysName}
  Nevertheless, ${boysName} knew that simcha poretz geder (“joy breaks boundaries”) so he decided to be happy. 
  Right when he decided to be happy, he started to ${thirdVerb}  which was very ${secondAdj} to everyone watching. 
  His mother told him, ${boysName} you must eat these ${thirdAdj} ${secondMitzva} I baked for you! They are in the shape of Haman/’s hat! 
  Then you can go with your father to give ${thirdMitzva}  to the needy -  HaShem wants everyone to be happy on Purim!”`;
  console.log(story1);
  paragraphStory.innerText = story1;
  paragraphStory.style.display = "flex";
  
}

function fillStory2() {
  let firstNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let secondNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let thirdNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let firstVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let secondVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let thirdVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let firstAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let secondAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let thirdAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let firstMitzva = finalMitzvaArray[0];
  let secondMitzva = finalMitzvaArray[1];
  let thirdMitzva = finalMitzvaArray[2];
  let boysName = nameFormValues;

  let story2 = `Rosh HaShana
${boysName} lived in Costa Rica . 
His family had lived there for many years. 
His favorite holiday was Rosh HaShana because he was excited for a sweet new year. 
But this Rosh HaShana, he would have to really ${firstVerb} because his ${firstNoun} was so ${firstAdj}. 

On top of that, ${boysName} really wanted to ${secondVerb} but his sister’s ${secondNoun} was always in the way!
 It was really ${secondAdj} for her. 

Even with these challenges, ${boysName} was still looking forward to dipping the ${firstMitzva} in the ${thirdMitzva} 
for a sweet new year.

He also really wanted to hear the Rabbi blow the ${thirdMitzva} in shul. Hearing it always made her want to ${thirdVerb} in the ${thirdNoun}!`;

  paragraphStory.innerText = story2;
  paragraphStory.style.display = "flex";
}

function fillStory3() {
  let firstNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let secondNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let thirdNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let firstVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let secondVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let thirdVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let firstAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let secondAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let thirdAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let firstMitzva = finalMitzvaArray[0];
  let secondMitzva = finalMitzvaArray[1];
  let thirdMitzva = finalMitzvaArray[2];
  let boysName = nameFormValues;
  let story3 = `For ${boysName}, Chanuka was always his favirote holiday. He got to eat the delicious jelly-filled ${firstMitzva}
   and light the beautiful silver ${secondMitzva} 
  which had been in his father's family for hundreds of years.
  His favirote thing to do on Chanuka, though, was to spin the ${thirdMitzva}. Would it fall on Nun, Gimmel, Hey or Shin? 
  He also loved to ${firstVerb} ${firstAdj} ${firstNoun}s from the shop down the street. He always ${secondVerb} with his ${secondAdj} ${secondNoun}.
  Chanuka truly was ${boysName}'s favirote holiday. The hardest part is ${thirdVerb} for next ${thirdNoun}. 
  But he knew things would be very ${thirdAdj} by then, B"H.
`;

  paragraphStory.innerText = story3;
  paragraphStory.style.display = "flex";
}

function fillstory4() {
  let firstNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let secondNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let thirdNoun =
    nounFormValues[Math.floor(Math.random() * nounFormValues.length)];
  let firstVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let secondVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let thirdVerb =
    verbFormValues[Math.floor(Math.random() * verbFormValues.length)];
  let firstAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let secondAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let thirdAdj =
    adjFormValues[Math.floor(Math.random() * adjFormValues.length)];
  let firstMitzva = finalMitzvaArray[0];
  let secondMitzva = finalMitzvaArray[1];
  let thirdMitzva = finalMitzvaArray[2];
  let boysName = nameFormValues;

  let story4 = `Pesach was always so fun for ${boysName}. He got to ${firstVerb} with his family who came in from all over the ${firstNoun}.
  This year, his mother asked him to help her clean the house to make sure there was absolutely no ${firstMitzva} to be found. 
  His father also said that ${boysName} could come help him ${secondVerb} ${secondMitzva} at the local ${secondNoun}. At the ${secondMitzva}, 
  all the people there would scream out "l'shem ${secondMitzva} Mitzva!" before they would ${secondVerb}.
  ${boysName} was also very excited to have the Seder and ${thirdVerb} the four cups of ${thirdMitzva} from his ${thirdAdj} ${thirdNoun}. 
  Next year in Jerusalem!
  `;
  paragraphStory.innerText = story4;
  paragraphStory.style.display = "flex";
}
