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
const regexNom = /^(?=[a-zA-ZéèîïÉÎÏ\s]{2,25}$)(?=[a-zA-Z\s])(?:([\w\s*?])\1?(?!\1))+$/;
const regexAdresseMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexConcours = /^[0-9][0-9]?$/; // entre 0 et 99
const regexDate = /(?<=\D|^)(?<year>\d{4})(?<sep>[^\w\s])(?<month>1[0-2]|0[1-9])\k<sep>(?<day>0[1-9]|[12][0-9]|(?<=11\k<sep>|[^1][4-9]\k<sep>)30|(?<=1[02]\k<sep>|[^1][13578]\k<sep>)3[01])(?=\D|$)/;
// const regexToday = new Date();
// let champValide = false;


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
      prenomValide = true;
      formPrenom.style.borderColor = "black";
      messageErreur[0].textContent = " ";

  }else if (!formPrenom.value){
      prenomValide = false;
      // message d'erreur de champ vide :
      messageErreur[0].textContent = "Ce champ est obligatoire.";
      formPrenom.style.borderColor = "red";

  }else{
      prenomValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[0].textContent = "Veuillez saisir un prénom valide.";
      formPrenom.style.borderColor = "red";
}}

// nom
function validerNom(){

  if (regexNom.test(formNom.value) === true){
      nomValide = true;
      formNom.style.borderColor = "black";
      messageErreur[1].textContent = " ";

  }else if (!formNom.value){
      nomValide = false;
      // message d'erreur de champ vide :
      messageErreur[1].textContent = "Ce champ est obligatoire.";
      formNom.style.borderColor = "red";

  }else{
      nomValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[1].textContent = "Veuillez saisir un nom valide.";
      formNom.style.borderColor = "red";
}}

// email
function validerMail(){

  if (regexAdresseMail.test(formMail.value) === true){
      mailValide = true;
      formMail.style.borderColor = "black";
      messageErreur[2].textContent = " ";

  }else if (!formMail.value){
      mailValide = false;
      // message d'erreur de champ vide :
      messageErreur[2].textContent = "Ce champ est obligatoire.";
      formMail.style.borderColor = "red";

  }else{
      mailValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[2].textContent = "Veuillez saisir une adresse mail valide.";
      formMail.style.borderColor = "red";
}}

// date de naissance
function validerDateNaissance(){

  console.log(formDateNaissance.value);

  if (regexDate.test(formDateNaissance.value) === true){
      dateNaissanceValide = true;
      formDateNaissance.style.borderColor = "black";
      messageErreur[3].textContent = " ";

  }else if (!formDateNaissance.value){
      dateNaissanceValide = false;
      // message d'erreur de champ vide :
      messageErreur[3].textContent = "Ce champ est obligatoire.";
      formDateNaissance.style.borderColor = "red";

  }else{
      dateNaissanceValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[3].textContent = "Veuillez saisir une date valide.";
      formDateNaissance.style.borderColor = "red";
}}

// nombre de concours
function validerConcours(){

  if (regexConcours.test(formConcours.value) === true){
      concoursValide = true;
      formConcours.style.borderColor = "black";
      messageErreur[4].textContent = " ";

  }else if (!formConcours.value){
    concoursValide = false;
      // message d'erreur de champ vide :
      messageErreur[4].textContent = "Ce champ est obligatoire.";
      formConcours.style.borderColor = "red";

  }else{
    concoursValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[4].textContent = "Veuillez saisir un nombre en 0 et 99.";
      formConcours.style.borderColor = "red";
}}


// CONTRÔLE ET ENVOI DU FORMULAIRE

// let prenomValide = validerPrenom();
// let nomValide = validerNom();
// let mailValide = validerMail();
// let DateNaissanceValide = validerDateNaissance();
// let concoursValide = validerConcours();
// let villeValide = validerVille();
// let conditionsValide = validerConditions();


btnEnvoiFormulaire.addEventListener('click', function(e){
  e.preventDefault();

  if ((prenomValide = false)
   || (nomValide = false)
   || (mailValide = false)
   || (concoursValide = false)
   || (dateNaissanceValide = false) ){

    console.log("erreur");

    return false;
    
  }else if (!formConditions.checked){
      // bouton conditions d'utilisation non coché :
      messageErreur[6].textContent = "validation requise";

      return false;

  }else{ 
    // fenêtre de confirmation d'envoi
    modaleMessageConfirmation.style.display = "block";
    modaleFormulaire.style.display = "none";

    return true;
  }
})



