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

function createMenuForm() {

    const menuForm = document.createElement('form');
    menuForm.setAttribute('class', 'menu-form');
    menuForm.setAttribute('method', 'GET');
    menuForm.setAttribute('action', '#');

    for (const [key, value] of Object.entries(this.menu)) {
        const menuSectionDiv = document.createElement('div');
        menuSectionDiv.setAttribute('class', 'menu-section');

        const menuSectionTitle = document.createElement('h2');
        menuSectionTitle.innerText = key;

        menuSectionDiv.append(menuSectionTitle);

        const valueLength = value.length;
        for (let i=0; i<valueLength; i++) {
            const meal = value[i];

            const menuBoxDiv = document.createElement('div');
            menuBoxDiv.setAttribute('class', 'box');
            menuBoxDiv.innerHTML = `
                <input type="checkbox" id="${key+i}" name="${key}" value="${key+i}" />
                <label for="${key+i}">
                    <div class="label-title">
                        <div>
                            <h3>${meal.label}</h3>
                        </div>
                        <div>${meal.description}</div>
                    </div>
                    <div class="label-price">
                        <div>
                            <h3>${meal.price}</h3>
                        </div>
                        <div>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                </label>
            `;
            menuSectionDiv.append(menuBoxDiv);
        }

        menuForm.append(menuSectionDiv);
    }

    const menuFormSubmitButton = document.createElement('div');
    menuFormSubmitButton.setAttribute('class', 'form-submit');
    menuFormSubmitButton.innerHTML = `<input class="button" type="submit" value="Commander">`;
    menuForm.append(menuFormSubmitButton);

    return menuForm;
}

export const createRestaurant = (restaurant) => {
    const { id, location, name, pictureUrl, menu } = restaurant;
    const isNew = restaurant.new;

    return {
        id: id,
        location: location,
        name: name,
        pictureUrl: pictureUrl,
        isNew: isNew,
        menu: menu,
        createCard: createCard,
        createMenuForm: createMenuForm,
    }
};
