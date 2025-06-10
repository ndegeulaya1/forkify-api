const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io
///////////////////////////////////////
//handle navigation
function show() {
    const show = document.querySelector('.sidebar');
    show.style.display = 'flex';
}
function hide() {
    const hide = document.querySelector('.sidebar');
    hide.style.display = 'none';
}
console.log('hellow');
const renderSpinner = function(parentEl) {
    const spanner = `
      <div class="spinner">
          <svg>
            <use href="src/img/icons.svg#icon-loader"></use>
          </svg>
        </div> 
    `;
    parentEl.innerHTML = '';
    parentEl.insertAdjacentHTML('afterbegin', spanner);
};
///api request
const showRecipe = async function() {
    try {
        const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
        renderSpinner(recipeContainer);
        const data = await res.json();
        console.log(data);
        const { recipe } = data.data; // Destructuring
        const formattedRecipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            serving: recipe.servings,
            cooking_time: recipe.cooking_time,
            ingredients: recipe.ingredients,
            sourceUrl: recipe.source_url,
            image: recipe.image_url
        };
        const html = `
        <figure class="recipe__fig">
          <img src="${formattedRecipe.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${formattedRecipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${formattedRecipe.cooking_time}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${formattedRecipe.serving}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icon}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icon}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">l
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">

          ${formattedRecipe.ingredients.map((ing)=>{
            return `
              <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
               ${ing.description}
              </div>
            </li>
            `;
        }).join('')}
          

            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${formattedRecipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${formattedRecipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;
        recipeContainer.insertAdjacentHTML('afterbegin', html);
        console.log('hellow');
        console.log(formattedRecipe);
        return formattedRecipe; // Might be useful to return the value
    } catch (err) {
        console.error('Error:', err); // console.error is better for errors
        throw err; // Re-throw if you want calling code to handle it
    }
};
showRecipe();

//# sourceMappingURL=js-final.62406edb.js.map
