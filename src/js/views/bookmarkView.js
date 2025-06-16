import view from "./view.js";
import icons from 'url:../../img/icons.svg';

class bookmarkView extends view{
_parentElement = document.querySelector('.bookmarks__list');

_errorMessage='no any bookmark found here!!!!';




_returnHtml(){

  

    return this._data.map(this._returnHtmlPreview).join('');

   
}
 _returnHtmlPreview(result){
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
               </a>
             </li>
    `
 }

   
}

export default new bookmarkView();
