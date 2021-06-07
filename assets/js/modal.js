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

// VARIABLES
// Blocs de la modale
const modalCorps = document.querySelector(".bground"); // Corps de la modale
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

// Conditions de validation des inputs
const regexNom = /^(?=[a-zA-ZéèîïÉÎÏ\s]{2,25}$)(?=[a-zA-Z\s])(?:([\w\s*?])\1?(?!\1))+$/;
const regexAdresseMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexConcours = /^\d+$/; // entre 0 et 99
let champValide = true;
// const regexToday = new Date();


// FENÊTRE MODALE
// Ouvrir la modale
function ouvrirModale() {
  modalCorps.style.display = "block";
}
btnOuvrirModale.forEach((btn) => btn.addEventListener("click", ouvrirModale));

// Fermer la modale
function fermerModale() {
  modalCorps.style.display = "none";
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

  console.log("Prénom valide");

  }else{
      formPrenom.style.borderColor = "red";
      champValide = false;
      // message d'erreur :
      messageErreur[0].textContent = "Veuillez saisir un prénom valide.";

  console.log("Veuillez saisir un prénom valide.");
  }
}

// nom
function validerNom(){
  if (regexNom.test(formNom.value) === true){
      champValide = true;
      formNom.style.borderColor = "black";
      messageErreur[1].textContent = " ";

  }else{
      champValide = false;
      formNom.style.borderColor = "red";
      // message d'erreur :
      messageErreur[1].textContent = "Veuillez saisir un nom valide.";

  console.log("Veuillez saisir un nom valide.");
  }
}

// email
function validerMail(){
  if (regexAdresseMail.test(formMail.value) === true){
      champValide = true;
      formMail.style.borderColor = "black";
      messageErreur[2].textContent = " ";
  console.log("Adresse mail valide");

  }else{
      champValide = false;
      formMail.style.borderColor = "red";
      // message d'erreur :
      messageErreur[2].textContent = "Veuillez saisir une adresse mail valide.";
  console.log("Veuillez saisir une adresse mail valide.");
  }
}

// fonction message Erreur
//   for(i = 0; i < formulaireChamp.frequence.length; i++){
// }

// facultatif : date de naissance (inf à la date du jour)
// message d'erreur :
// messageErreur[3].textContent = "Veuillez saisir une date de naissance valide.";

// nombre de concours (entre 0 et 99)
function validerConcours(){
  if (regexConcours.test(formConcours.value) === true){
      champValide = true;
      formConcours.style.borderColor = "black";
      messageErreur[4].textContent = " ";
  console.log("Nombre de participations valide");

  }else{
      champValide = false;
      formConcours.style.borderColor = "red";
      // message d'erreur :
      messageErreur[4].textContent = "Veuillez saisir un nombre en 0 et 99.";
  console.log("Renseignez le nombre de vos participations à un concours.");
  }
}

// ENVOI DU FORMULAIRE
function sendForm(){
  if (champValide = false){
    return false;

  }else{
    return true;
}
}



