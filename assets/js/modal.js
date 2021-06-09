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

let prenomValide = true;
let nomValide = true;
let mailValide = true;
let dateNaissanceValide = true;
let concoursValide = true;


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

  if (regexNom.test(formPrenom.value) == true){
    formPrenom.style.borderColor = "black";
    messageErreur[0].textContent = " ";
    
    prenomValide = true;
    console.log(prenomValide);

  }else if (!formPrenom.value){
      prenomValide = false;
      // message d'erreur de champ vide :
      messageErreur[0].textContent = "Ce champ est obligatoire.";
      formPrenom.style.borderColor = "red";
      
      console.log("prénom non rempli");

  }else{
      prenomValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[0].textContent = "Veuillez saisir un prénom valide.";
      formPrenom.style.borderColor = "red";
      console.log(prenomValide);
}}

// nom
function validerNom(){

  if (regexNom.test(formNom.value) == true){
      nomValide = true;
      formNom.style.borderColor = "black";
      messageErreur[1].textContent = " ";

      console.log(nomValide);

  }else if (!formNom.value){
      nomValide = false;
      // message d'erreur de champ vide :
      messageErreur[1].textContent = "Ce champ est obligatoire.";
      formNom.style.borderColor = "red";

      console.log(nomValide);


  }else{
      nomValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[1].textContent = "Veuillez saisir un nom valide.";
      formNom.style.borderColor = "red";

      console.log(nomValide);

}}

// email
function validerMail(){

  if (regexAdresseMail.test(formMail.value) == true){
      mailValide = true;
      formMail.style.borderColor = "black";
      messageErreur[2].textContent = " ";
      console.log("mail valide");
      console.log(mailValide);

  }else if (!formMail.value){
      mailValide = false;
      // message d'erreur de champ vide :
      messageErreur[2].textContent = "Ce champ est obligatoire.";
      formMail.style.borderColor = "red";
      console.log("mail non rempli")


      
    }else{
      mailValide = false;
      // message d'erreur de champ inccorect :
      messageErreur[2].textContent = "Veuillez saisir une adresse mail valide.";
      formMail.style.borderColor = "red";
      console.log("mail inccorect")

}}

// date de naissance
function validerDateNaissance(){

  console.log(formDateNaissance.value);

  if (regexDate.test(formDateNaissance.value) == true){
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

  if (regexConcours.test(formConcours.value) == true){
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

  if ( (prenomValide == false)
   || (nomValide == false)
   || (mailValide == false)
   || (concoursValide == false)
   || (dateNaissanceValide == false) ){

    console.log("erreur");

    
  }else if (!formConditions.checked){
      // bouton conditions d'utilisation non coché :
      messageErreur[6].textContent = "validation requise";

      console.log("validation requise");



  }else{ 
    // fenêtre de confirmation d'envoi
    modaleMessageConfirmation.style.display = "block";
    modaleFormulaire.style.display = "none";

    console.log("envoi");

  }
})



