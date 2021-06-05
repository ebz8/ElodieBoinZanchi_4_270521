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
// Modal blocks
const modalCorps = document.querySelector(".bground"); // Corps de la modale
const btnOuvrirModale = document.querySelectorAll(".modal-btn"); // Bouton d'ouverture de la modale
const btnFermerModale = document.querySelector(".close"); // Icône x : fermeture de la modale
const btnEnvoiFormulaire = document.getElementById("btn-submit"); // Bouton envoi du formulaire
const formulaireChamp = document.getElementsByClassName("formData"); // Bloc contenant un input

// Users data
const formData = document.querySelectorAll(".formData > input"); // Bloc de data utilisateur
// console.log(formData);
const formPrenom = document.getElementById("first"); // Prénom
const formNom = document.getElementById("last"); // Nom
const formMail = document.getElementById("email"); // Adresse mail
const formDateNaissane = document.getElementById("birthdate"); // Date de naissance
const formConcours = document.getElementById("number"); // Nombre de tournois
const formVille = document.querySelectorAll(".formData .checkbox-input[type=radio]"); // Villes d'inscription

// Validation conditions
// const regexName = /^(?=[a-zA-ZéèîïÉÎÏ\s]{2,25}$)(?=[a-zA-Z\s])(?:([\w\s*?])\1?(?!\1))+$/;
// const regexMail = /\S+@\S+\.\S+/;
// let validOrNot = boolean;

const regexNom = /^(?=[a-zA-ZéèîïÉÎÏ\s]{2,25}$)(?=[a-zA-Z\s])(?:([\w\s*?])\1?(?!\1))+$/;
const regexAdresseMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // birthdate:
  // contestNumber:



// MODAL EVENT
// Launch modal
function launchModal() {
  modalCorps.style.display = "block";
}

btnOuvrirModale.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal
function closeModal() {
  modalCorps.style.display = "none";
}

btnFermerModale.addEventListener('click', closeModal);

// Vérification des champs d'input

// PRENOM
function validerPrenom(){
  if (regexNom.test(formPrenom.value) === true){
  console.log("ok");

  }else{
    formPrenom.focus();

    console.log("test d'echec");
  }
}

// NOM
function validerNom(){
  if (regexNom.test(formNom.value) === true){
  console.log("ok");

  }else{
    formNom.focus();
    console.log("test d'echec");
  }
}

// MAIL
function validerMail(){
  if (regexAdresseMail.test(formMail.value) === true){
  console.log("ok");

  }else{
    formMail.focus();
    console.log("test d'echec");
  }
}



// Submit form
function sendForm(){
  if (formName.validity.valueMissing){
    e.preventDefault(); 
  }
}

btnEnvoiFormulaire.addEventListener("submit", sendForm);



