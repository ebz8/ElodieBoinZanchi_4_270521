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


////////////////
//   MODALE   //
////////////////

// DOM Elements
// Blocs de la modale
const modaleCorps = document.querySelector(".bground"); // Corps de la modale
const modaleFormulaire = document.querySelector(".--formulaire"); // Corps du formulaire
const modaleMessageConfirmation = document.querySelector(".--confirmation"); // Corps du formulaire
const btnOuvrirModale = document.querySelectorAll(".modal-btn"); // Bouton d'ouverture de la modale
const btnFermerModale = document.querySelector(".close"); // Icône fermeture de la modale
const btnEnvoiFormulaire = document.getElementById("btn-submit"); // Bouton envoi du formulaire
const formulaireChamp = document.querySelector(".formData"); // Bloc contenant un input
const messageErreur = document.getElementsByClassName("data-error");


// Données des utilisateurs
const formPrenom = document.getElementById("first"); // Prénom
const formNom = document.getElementById("last"); // Nom
const formMail = document.getElementById("email"); // Adresse mail
const formDateNaissance = document.getElementById("birthdate"); // Date de naissance
const formConcours = document.getElementById("quantity"); // Nombre de tournois
const formVille = document.querySelectorAll(".formData .checkbox-input[type=radio]"); // Villes d'inscription
const formConditions = document.getElementById("checkbox1"); // Accepter les conditions d'utilisation

// Conditions de validation des inputs
let champValide = false;
const regexNom = /^(?=[a-zA-ZéèîïÉÎÏ\s]{2,25}$)(?=[a-zA-Z\s])(?:([\w\s*?])\1?(?!\1))+$/;
const regexAdresseMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexConcours = /^\d+$/; // entre 0 et 99
// const regexToday = new Date();


// FENÊTRE MODALE
// Ouvrir la modale
function ouvrirModale() {
  modaleCorps.style.display = "block";
}
btnOuvrirModale.forEach((btn) => btn.addEventListener("click", ouvrirModale));

// Fermer la modale
function fermerModale() {
  modaleCorps.style.display = "none";
}
btnFermerModale.addEventListener('click', fermerModale);


// VÉRIF DES CHAMPS INPUT
// & MESSAGES D'ERREUR

// prénom
function validerPrenom(){

  if (regexNom.test(formPrenom.value) === true){
      champValide = true;
      formPrenom.style.borderColor = "black";
      messageErreur[0].textContent = " ";

  }else if (!formPrenom.value){
      champValide = false;
      // message d'erreur de champ vide :
      messageErreur[0].textContent = "Ce champ est obligatoire.";
      formPrenom.style.borderColor = "red";

  }else{
      champValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[0].textContent = "Veuillez saisir un prénom valide.";
      formPrenom.style.borderColor = "red";
}}

// nom
function validerNom(){

  if (regexNom.test(formNom.value) === true){
      champValide = true;
      formNom.style.borderColor = "black";
      messageErreur[1].textContent = " ";

  }else if (!formNom.value){
    champValide = false;
      // message d'erreur de champ vide :
      messageErreur[1].textContent = "Ce champ est obligatoire.";
      formNom.style.borderColor = "red";

  }else{
      champValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[1].textContent = "Veuillez saisir un nom valide.";
      formNom.style.borderColor = "red";
}}


// email
function validerMail(){

  if (regexAdresseMail.test(formMail.value) === true){
      champValide = true;
      formMail.style.borderColor = "black";
      messageErreur[2].textContent = " ";

  }else if (!formMail.value){
    champValide = false;
      // message d'erreur de champ vide :
      messageErreur[2].textContent = "Ce champ est obligatoire.";
      formMail.style.borderColor = "red";

  }else{
      champValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[2].textContent = "Veuillez saisir une adresse mail valide.";
      formMail.style.borderColor = "red";
}}

// nombre de concours
function validerConcours(){

  if (regexConcours.test(formConcours.value) === true){
      champValide = true;
      formConcours.style.borderColor = "black";
      messageErreur[4].textContent = " ";

  }else if (!formConcours.value){
    champValide = false;
      // message d'erreur de champ vide :
      messageErreur[4].textContent = "Ce champ est obligatoire.";
      formConcours.style.borderColor = "red";

  }else{
      champValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[4].textContent = "Veuillez saisir un nombre en 0 et 99.";
      formConcours.style.borderColor = "red";
}}


// CONTRÔLE ET ENVOI DU FORMULAIRE

btnEnvoiFormulaire.addEventListener('click', function(e){
  if (champValide = false){
    e.preventDefault();
    console.log("erreur");
    
  }else if (!formConditions.checked){
      e.preventDefault();
      // bouton conditions d'utilisation non coché :
      messageErreur[6].textContent = "validation requise";

  }else{ 
    // fenêtre de confirmation d'envoi
    modaleMessageConfirmation.style.display = "flex"
    modaleFormulaire.style.display = "none"
  }
})



