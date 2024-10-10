const modal = document.getElementById("restaurant-modal");
const openButton = document.getElementById("button-modal");
const closeButton = document.getElementById("close-modal");
const form1 = document.getElementById("form1");

function openModal() {
  modal.style.visibility = "visible";
}

openButton.addEventListener("click", openModal);

closeButton.addEventListener("click", () => {
  modal.style.visibility = "hidden";
});

function validateStringLength(string, length) {
    return string.length >= length;
}

form1.addEventListener("submit", (event) => {
  event.preventDefault();

  const myForm = new FormData(form1);

  const lastname = myForm.get('nom');
  const firstname = myForm.get('firstName');
  const email = myForm.get('email');
  const tel = myForm.get('tel');
  const nbPerson = myForm.get('nbPerson');

  if (!validateStringLength(lastname, 2)) {
    const lastnameHtmlElement = event.target.nom;
    const parentHtmlElement = lastnameHtmlElement.parentElement;
    const errorMessageHtmlElement = document.createElement('div');
    errorMessageHtmlElement.innerText = "Ton nom doit faire plus de 2 charactères";
    parentHtmlElement.append(errorMessageHtmlElement);
  }

  if (
    !validateStringLength(lastname, 2) ||
    !validateStringLength(firstname, 2) ||
    !/^\+33[0-9]{9}$/.test(tel) ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/.test(email) ||
    nbPerson < 1
  ) {
    alert("Veuillez remplir correctement tous les champs avant de soumettre.");
  } else {
    alert("Formulaire soumis avec succès!");
  }
});
