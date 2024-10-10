const dataUrl = 'https://gist.githubusercontent.com/baiello/a42c640d3bd6a52d965b29e3e0de6db7/raw/01f153c8c1099605476721b5326df0d533b283c7/restaurants.json'


// Fonction pour récupérer les données des restaurants depuis une URL
export function fetchRestaurantData() {
  // try {
  //   const response = fetch('https://gist.githubusercontent.com/baiello/a42c640d3bd6a52d965b29e3e0de6db7/raw/5b57e9cbb809c6ac531345309cc0a5febb5f141e/restaurants.json'); // Remplace par ton URL
  //   const restaurants = response.json();


  //   displayRestaurants(restaurants);
  // } catch (error) {
  //   console.error("Erreur lors de la récupération des données des restaurants : ", error);
  // }
  return fetch(dataUrl)
        .then( response => response.json() )
        .then( restaurants => restaurants )
        .catch(error => error )
}


// Fonction pour extraire l'ID du restaurant de l'URL
function getRestaurantIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }
  
  // Récupérer l'ID du restaurant et afficher ses détails
  const restaurantId = getRestaurantIdFromUrl();
  const restaurant = fetchRestaurantData().find(
    (resto) => {
      resto.id === restaurantId
    }
  );
  createMenu(restaurant);