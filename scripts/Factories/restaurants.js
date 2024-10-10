function createCard() {
    const article = document.createElement('article');
    article.setAttribute('class', 'restaurant');

    article.innerHTML = `
        <a href="/restaurant.html?id=${this.id}">
            <div>
                <img src="${this.pictureUrl}">
                ${ this.isNew ? '<span class="tag-new">Nouveau</span>' : '' }
            </div>
            <div class="title">
                <h1>${this.name}</h1>
                <p>${this.location}</p>
            </div>
        </a>
        <div class="favorite">
            <input type="checkbox" id="favorite-${this.id}" />
            <label for="favorite-${this.id}">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-heart"></i>
            </label>
        </div>
    `;

    return article;
}

const createRestaurant = (restaurant) => {
    const { id, location, name, pictureUrl } = restaurant;
    const isNew = restaurant.new;

    return {
        id: id,
        location: location,
        name: name,
        pictureUrl: pictureUrl,
        isNew: isNew,
        createCard: createCard,
    }
  };