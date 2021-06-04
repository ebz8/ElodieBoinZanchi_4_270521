////////////////
// NAVIGATION //
////////////////

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/////////////////
//    MODAL    //
/////////////////

// VARIABLES - DOM ELEMENTS
// Modal block
const modalbg = document.querySelector(".bground"); // Corps de la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Bouton d'ouverture de la modale
const formData = document.querySelectorAll(".formData"); // Bloc de data utilisateur
const closeBtn = document.querySelector(".close"); // Icône x : fermeture de la modale

// Users data
const formName = document.getElementById("first"); // Prénom
const formLastName = document.getElementById("last"); // Nom
const formMail = document.getElementById("mail"); // Adresse mail
const formBirthdate = document.getElementById("birthdate"); // Date de naissance
const formContestNumber = document.getElementById("number"); // Nombre de tournois
const formSelectedCity = document.querySelectorAll(".formData .checkbox-input[type=radio]"); // Villes d'inscription
console.log(formSelectedCity)
// boucle for pour les locations de 1 à 6 ?
// const formConditions = document.

// MODAL EVENT
// Launch modal
function launchModal() {
  modalbg.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal
function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener('click', closeModal);

// Modal submit
// comment sélectionner avec le for ?
// faire un consol log pour voir comment on selectionne via label - for




