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
// Bloc de la modale
const modalCorps = document.querySelector(".bground"); // Corps de la modale
const btnOuvrirModale = document.querySelectorAll(".modal-btn"); // Bouton d'ouverture de la modale
const btnFermerModale = document.querySelector(".close"); // Icône x : fermeture de la modale
const btnEnvoiFormulaire = document.getElementById("btn-submit"); // Bouton envoi du formulaire
const formulaireChamp = document.querySelectorAll(".formData"); // Bloc contenant un input

// Données des utilisateurs
// console.log(formData);
const formPrenom = document.getElementById("first"); // Prénom
const formNom = document.getElementById("last"); // Nom
const formMail = document.getElementById("email"); // Adresse mail
const formDateNaissance = document.getElementById("birthdate"); // Date de naissance
const formConcours = document.getElementById("quantity"); // Nombre de tournois
const formVille = document.querySelectorAll(".formData .checkbox-input[type=radio]"); // Villes d'inscription

// Validation conditions
const regexNom = /^(?=[a-zA-ZéèîïÉÎÏ\s]{2,25}$)(?=[a-zA-Z\s])(?:([\w\s*?])\1?(?!\1))+$/;
const regexAdresseMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regexConcours = /^\d+$/; // entre 0 et 99
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
      formPrenom.style.borderColor = "black";
      // innerHTML appendchild formChamp : message d'erreur

  console.log("Prénom valide");

  }else{
      formPrenom.style.borderColor = "red";
      // innerHTML appendchild formChamp : message d'erreur

    console.log("Veuillez renseigner un prénom valide.");
  }
}

// nom
function validerNom(){
  if (regexNom.test(formNom.value) === true){
      formNom.style.borderColor = "black";
  console.log("Nom valide");

  }else{
      formNom.style.borderColor = "red";
    console.log("Veuillez renseigner un nom valide.");
  }
}

// email
function validerMail(){
  if (regexAdresseMail.test(formMail.value) === true){
      formMail.style.borderColor = "black";
  console.log("Adresse mail valide");

  }else{
      formMail.style.borderColor = "red";
    console.log("Veuillez renseigner une adresse mail valide.");
  }
}

// facultatif : date de naissance (18 ans min)

// nombre de concours (entre 0 et 99)
function validerConcours(){
  if (regexConcours.test(formConcours.value) === true){
      formConcours.style.borderColor = "black";
  console.log("ok");

  }else{
      formConcours.style.borderColor = "red";
    console.log("Renseignez le nombre de vos participations à un concours.");
  }
}

// ville : si un bouton radio checked = true

// ENVOI DU FORMULAIRE
function sendForm(){
  if (formName.validity.valueMissing){
    e.preventDefault(); 
  }
}

btnEnvoiFormulaire.addEventListener("submit", sendForm);



