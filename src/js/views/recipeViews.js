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
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.serving + 1
            }">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
          

          <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${icons}#icon-bookmark${this._data.bookmarked? '-fill': ''}"></use>
            </svg>
          </button>
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
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
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