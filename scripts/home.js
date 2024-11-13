import '../style.css';

import { createRestaurant } from "./factories/restaurant.js";

const dataUrl = 'https://gist.githubusercontent.com/baiello/a42c640d3bd6a52d965b29e3e0de6db7/raw/01f153c8c1099605476721b5326df0d533b283c7/restaurants.json'

const myEvent = new Event('Restaurants fetched and displayed');

export function getData() {
    return fetch(dataUrl)
        .then( response => response.json() )
        .then( restaurants => restaurants )
        .catch(error => error )
};

getData().then(
    (restaurants) => {
        const restaurantsContainer = document.getElementById('restaurants');

        const restaurantsLength = restaurants.length;
        for ( let i = 0; i < restaurantsLength; i++ ) {
            const restaurant = createRestaurant(restaurants[i]);
            restaurantsContainer.append(restaurant.createCard());
        }

        document.dispatchEvent(myEvent);
    }
);

document.addEventListener('Restaurants fetched and displayed', () => {
    const loaderElement = document.getElementById('restaurants-loader');
    loaderElement.remove();
});
