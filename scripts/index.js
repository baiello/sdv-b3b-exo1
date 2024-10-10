

//   https://gist.githubusercontent.com/baiello/a42c640d3bd6a52d965b29e3e0de6db7/raw/5b57e9cbb809c6ac531345309cc0a5febb5f141e/restaurants.json


// Appel de la fonction fetch lors du chargement de la page
// window.onload = fetchRestaurantData();

const dataUrl = 'https://gist.githubusercontent.com/baiello/a42c640d3bd6a52d965b29e3e0de6db7/raw/01f153c8c1099605476721b5326df0d533b283c7/restaurants.json'


// Fonction pour récupérer les données des restaurants depuis une URL
function fetchRestaurantData() {
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

// Fonction pour afficher les restaurants
// function displayRestaurants(restaurants) {
  fetchRestaurantData().then(
    (restaurants) => {
    const restaurantList = document.getElementById('restaurant-list');
    const restaurantsLengh = restaurants.length;

    console.log("données reçus", restaurants)


    for ( let i = 0; i < restaurantsLengh; i++ ) {
      // const restaurantItem = document.createElement('div');
      // restaurantItem.classList.add('restaurant');

      // restaurantItem.innerHTML = `
      //   <h2>${restaurants[i].name}</h2>
      //   <p>Location: ${restaurants[i].location}</p>
        
      // `;

      // restaurantList.appendChild(restaurantItem);
      const restaurant = createRestaurant(restaurants[i]);
      restaurantList.append(restaurant.createCard());
    };
  }
);


{/* <h3>Menu</h3>
      <h4>Entrées</h4>
      <ul>
        ${restaurant.menu.starters.map(starter => `<li>${starter.label} - ${starter.description} (${starter.price})</li>`).join('')}
      </ul>
      <h4>Plats</h4>
      <ul>
        ${restaurant.menu.main.map(main => `<li>${main.label} - ${main.description} (${main.price})</li>`).join('')}
      </ul>
      <h4>Desserts</h4>
      <ul>
        ${restaurant.menu.dessert.map(dessert => `<li>${dessert.label} - ${dessert.description} (${dessert.price})</li>`).join('')}
      </ul> */}



