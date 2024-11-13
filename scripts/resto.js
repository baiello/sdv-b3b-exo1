import '../style.css';

import { getData } from "./home.js";
import { createRestaurant } from "./factories/restaurant.js";

const searchParams = new URLSearchParams(window.location.search);
const restoId = searchParams.get('id');

function getRestaurantById(id) {
  return getData().then(
    (restaurants) => {
      let resto;
      restaurants.forEach(restaurant => {
        if (restaurant.id == id) {
          resto = restaurant;
        }
      });
      return resto;
    }
  );
}

getRestaurantById(restoId).then(
  data => {
    const restaurant = createRestaurant(data);
    updatePageTitle(restaurant.name);
    updatePicture(restaurant.pictureUrl);
    updateRestaurantName(restaurant.name);

    document.getElementById('menu-form').append(restaurant.createMenuForm());
  }
);

function updatePageTitle(title) {
  const pageTitleElement = document.getElementsByTagName('title')[0];
  pageTitleElement.innerText = title;
}

function updatePicture(url) {
  const restaurantImageElement = document.getElementById('restaurant-image');
  restaurantImageElement.setAttribute('src', url);
}

function updateRestaurantName(name) {
  const restaurantNameElement = document.getElementById('restaurant-name');
  restaurantNameElement.innerText = name;
}

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

// Nom => Min 2 charactères, lettres et - et espace
// Prénom => Min 2 charactères, lettres et - et espace
// Email => L'email doit être valide
// Numéro de tel => Le tel doit être français +33XXXXXXXXX
// Date de réservation => Dans le futur, à 3 mois maximum
// Heure de réservation => Liste de créneaux disponibles
// Nombre de personnes => minimum 1 personne
// Bouton d'envoi

// https://t.ly/UUO6_

// https://gist.githubusercontent.com/baiello/a42c640d3bd6a52d965b29e3e0de6db7/raw/e16bf92636e44dc573074863712fd93947f7ad40/restaurants.json