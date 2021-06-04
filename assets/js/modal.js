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
const modalbg = document.querySelector(".bground"); // corps de la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // bouton d'ouverture de la modale
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close"); // icône x : fermeture de la modale

// Users data
const formName = document.getElementById("first"); // Prénom
const formLastName = document.getElementById("last"); // Nom
const formMail = document.getElementById("mail"); // Adresse mail
const formBirthdate = document.getElementById("birthdate"); // Date de naissance
const formContestNumber = document.getElementById("number"); // Nombre de tournois
const formSelectedCity = document.querySelectorAll(".checkbox-input[type=radio]"); // Ville d'inscription

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
// ( + accessibilité ?)
// ( avec échap ?)

function closeModal() {
  modalbg.style.display = "none";
}

closeBtn.addEventListener('click', closeModal);

// Modal submit
// comment sélectionner avec le for ?
// faire un consol log pour voir comment on selectionne via label - for




