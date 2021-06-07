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

  console.log("Prénom valide");

  }else{
      formPrenom.style.borderColor = "red";
      // message d'erreur :
      let msgErreur = document.createElement("span");
      msgErreur.innerHTML = "<span> Veuillez saisir un prénom valide. </span>";
      formPrenom.parendElement.appendChild(msgErreur); // version par classe mais trouver comment selec les suivantes

  console.log("Veuillez saisir un prénom valide.");
  }
}

// nom
function validerNom(){
  if (regexNom.test(formNom.value) === true){
      formNom.style.borderColor = "black";

  }else{
      formNom.style.borderColor = "red";
      // comment selec le formulaireChamp correspondant (boucle for?) :
      let msgErreur = document.createElement("span");
      msgErreur.innerHTML = "<span> Veuillez saisir un nom valide. </span>"
      formNom.parentElement.appendChild(msgErreur);

  console.log("Veuillez saisir un nom valide.");
  }
}

// email
function validerMail(){
  if (regexAdresseMail.test(formMail.value) === true){
      formMail.style.borderColor = "black";
  console.log("Adresse mail valide");

  }else{
      formMail.style.borderColor = "red";
      // message d'erreur
      let msgErreur = document.createElement("span");
      msgErreur.innerHTML = "<span> Veuillez renseigner une adresse mail valide. </span>"
      formMail.parentElement.appendChild(msgErreur); 
  console.log("Veuillez saisir une adresse mail valide.");
  }
}

// fonction message Erreur
//   for(i = 0; i < formulaireChamp.frequence.length; i++){
// }
//   let msgErreur = document.createElement("span");
//   msgErreur.innerHTML = "<span> Veuillez saisir une adresse mail valide. </span>"
// }

// facultatif : date de naissance (inf à la date du jour)

// nombre de concours (entre 0 et 99)
function validerConcours(){
  if (regexConcours.test(formConcours.value) === true){
      formConcours.style.borderColor = "black";
  console.log("Nombre de participations valide");

  }else{
      formConcours.style.borderColor = "red";
  console.log("Renseignez le nombre de vos participations à un concours.");
  }
}

// ville : si un bouton radio checked = true
function validerVille(){
  if (formVille.checked === true){
    console.log("Ville selectionnée");

  }else{
    // message d'erreur
    let msgErreur = document.createElement("span");
    msgErreur.innerHTML = "<span> Veuillez sélectionner une ville. </span>"
    formVille.parentElement.appendChild(msgErreur);
  }

}

// ENVOI DU FORMULAIRE
function sendForm(){
if (formName.validity.valueMissing){
    e.preventDefault(); 
    
  }
}

btnEnvoiFormulaire.addEventListener("submit", sendForm);



