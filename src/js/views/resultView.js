import view from "./view.js";
import icons from 'url:../../img/icons.svg';


class resultView extends view{
_parentElement = document.querySelector('.results');

_errorMessage='no recipe found try another one!!!!';




_returnHtml(){

  

    return this._data.map(this._returnHtmlPreview).join('');

   
}
 _returnHtmlPreview(result){
   console.log(result);
 return`

     <li class="preview">
            <a class="preview__link" href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
                
              </div>
               <div class="preview__user-generated ${result.key ? '' : 'hidden'}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

        </div>
            </a>
           
          </li>
    `
 }

   
}

export default new resultView();
