////////////////
// NAVIGATION //
////////////////

function editNav() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
      x.className += " responsive";
  }else{
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
const btnFermerConfirmation = document.querySelector(".btn-confirmation"); // Bouton close message confirmation

// Données des utilisateurs
const formPrenom = document.getElementById("first"); // Prénom
const formNom = document.getElementById("last"); // Nom
const formMail = document.getElementById("email"); // Adresse mail
const formDateNaissance = document.getElementById("birthdate"); // Date de naissance
const formConcours = document.getElementById("quantity"); // Nombre de tournois
const formVille = document.querySelectorAll(".formData .checkbox-input[type=radio]"); // Villes d'inscription
const formConditions = document.getElementById("checkbox1"); // Accepter les conditions d'utilisation

// Conditions de validation des inputs
const regexNom = /^(?=[a-zA-ZéèîïÉÎÏ\s]{2,25}$)(?=[a-zA-Z\s])(?:([\w\s*?])\1?(?!\1))+$/;
const regexAdresseMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexConcours = /^[0-9][0-9]?$/; // entre 0 et 99
const regexDate = /(?<=\D|^)(?<year>\d{4})(?<sep>[^\w\s])(?<month>1[0-2]|0[1-9])\k<sep>(?<day>0[1-9]|[12][0-9]|(?<=11\k<sep>|[^1][4-9]\k<sep>)30|(?<=1[02]\k<sep>|[^1][13578]\k<sep>)3[01])(?=\D|$)/;
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
// (fonctions appelées depuis le HTML : onblur)

// prénom
function validerPrenom(){

  if (regexNom.test(formPrenom.value) == true){
    formPrenom.style.borderColor = "black";
    messageErreur[0].textContent = " ";
    return true;

  }else if (!formPrenom.value){
      // message d'erreur de champ vide :
      messageErreur[0].textContent = "Ce champ est obligatoire.";
      formPrenom.style.borderColor = "#ff0000";
      return false;

  }else{
      // message d'erreur de champ inccorect :
      messageErreur[0].textContent = "Veuillez saisir un prénom valide.";
      formPrenom.style.borderColor = "#ff0000";
      return false;
}}

// nom
function validerNom(){

  if (regexNom.test(formNom.value) == true){
      formNom.style.borderColor = "black";
      messageErreur[1].textContent = " ";
      return true;

  }else if (!formNom.value){
      // message d'erreur de champ vide :
      messageErreur[1].textContent = "Ce champ est obligatoire.";
      formNom.style.borderColor = "#ff0000";
      return false;

  }else{
      // message d'erreur de champ inccorect :
      messageErreur[1].textContent = "Veuillez saisir un nom valide.";
      formNom.style.borderColor = "#ff0000";
      return false;
}}

// email
function validerMail(){

  if (regexAdresseMail.test(formMail.value) == true){
      formMail.style.borderColor = "black";
      messageErreur[2].textContent = " ";
      return true;

  }else if (!formMail.value){
      // message d'erreur de champ vide :
      messageErreur[2].textContent = "Ce champ est obligatoire.";
      formMail.style.borderColor = "#ff0000";
      return false;

  }else{
      // message d'erreur de champ inccorect :
      messageErreur[2].textContent = "Veuillez saisir une adresse mail valide.";
      formMail.style.borderColor = "#ff0000";
      return false;
}}

// date de naissance
function validerDateNaissance(){

  if (regexDate.test(formDateNaissance.value) == true){
      formDateNaissance.style.borderColor = "black";
      messageErreur[3].textContent = " ";
      return true;

  }else if (!formDateNaissance.value){
      // message d'erreur de champ vide :
      messageErreur[3].textContent = "Ce champ est obligatoire.";
      formDateNaissance.style.borderColor = "#ff0000";
      return false;

  }else{
      // message d'erreur de champ inccorect :
      messageErreur[3].textContent = "Veuillez saisir une date valide.";
      formDateNaissance.style.borderColor = "#ff0000";
      return false;
}}

// nombre de concours
function validerConcours(){

  if (regexConcours.test(formConcours.value) == true){
      formConcours.style.borderColor = "black";
      messageErreur[4].textContent = " ";
      return true;

  }else if (!formConcours.value){
      // message d'erreur de champ vide :
      messageErreur[4].textContent = "Ce champ est obligatoire.";
      formConcours.style.borderColor = "#ff0000";
      return false;

  }else{
      // message d'erreur de champ inccorect :
      messageErreur[4].textContent = "Veuillez saisir un nombre en 0 et 99.";
      formConcours.style.borderColor = "#ff0000";
      return false;
}}

function validerConditions(){
  if (formConditions.checked){
    messageErreur[6].textContent = " ";
      return true;
  }else{
      // bouton conditions d'utilisation non coché :
      messageErreur[6].textContent = "champ requis";
      return false;
}}


// CONTRÔLE ET ENVOI DU FORMULAIRE

// vérification des champs
btnEnvoiFormulaire.addEventListener('click', function(e){
  e.preventDefault();

    let prenomValide = validerPrenom();
    let nomValide = validerNom();
    let mailValide = validerMail();
    let DateNaissanceValide = validerDateNaissance();
    let concoursValide = validerConcours();
    let conditionsValide = validerConditions();

  let champsTousValides = prenomValide && nomValide && mailValide
  && DateNaissanceValide && concoursValide && conditionsValide;    

  // affichage fenêtre de confirmation d'envoi
  if (champsTousValides){
    modaleMessageConfirmation.style.display = "flex";
    modaleFormulaire.style.display = "none";
    console.log("Formulaire envoyé.");
   
  // blocage de l'envoi du formulaire non valide
  }else{ 
    console.log("Formulaire non validé.");
    return false;
  }
})

// fermeture de la fenêtre de confirmation d'inscription
btnFermerConfirmation.addEventListener('click', fermerModale);