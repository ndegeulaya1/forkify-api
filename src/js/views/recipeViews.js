 import view from './view.js';
import icons from 'url:../../img/icons.svg';






  export class recipeView extends view {
   _parentElement = document.querySelector('.recipe');

   _errorMessage='no recipe found try another one!!!!';

   
    

    

    addRenderEvent(hander){
        ['load','hashchange'].forEach(ev=>window.addEventListener(ev,hander));
    };
     
 addHandlerUpdateServings(handler) {
  this._parentElement.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn--update-servings');
    if (!btn) return;

    const updateTo = +btn.dataset.updateTo;
    if (updateTo > 0) handler(updateTo); // Optional safety: prevent negative servings
  });
}


addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler();
    });
  }
    _returnHtml(){
        

        console.log( this._data);

        return `

        
        
          <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.serving}</span>
            <span class="recipe__info-text">servings</span>

           <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.serving - 1
            }">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.serving + 1
            }">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </button>
          </div>
        </div>
          

          <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

        </div>
          <button class="btn--round btn--bookmark">
           <svg xmlns="http://www.w3.org/2000/svg" fill="${this._data.bookmarked ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke-width="1.5" stroke="" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
          </button>
          <p class="bookRecipe">${this._data.bookmarked ? 'bookmaked' : ''}</p>
        </div>

        <div class="recipe__ingredients">l
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">

${this._data.ingredients
  ?.filter(ing => ing && ing.description)
  .map(ing => {
    let quantity = '';
    try {
      if (ing.quantity) {
        const frac = new Fraction(ing.quantity);
        const whole = Math.floor(frac.numerator / frac.denominator);
        const remainder = frac.numerator % frac.denominator;

        quantity =
          remainder === 0
            ? `${whole}`
            : whole === 0
            ? `${remainder}/${frac.denominator}`
            : `${whole} ${remainder}/${frac.denominator}`;

            
      }
    } catch (err) {
      console.error('Invalid quantity for ingredient:', ing.quantity);
    }

    return `
      <li class="recipe__ingredient">
       <svg  class="recipe__icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        <div class="recipe__quantity">${quantity}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit ?? ''}</span>
          ${ing.description}
        </div>
      </li>
    `;
  }).join('')}


          

           
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `


        
    }
}

export default new recipeView();