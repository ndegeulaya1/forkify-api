
import icons from 'url:../../img/icons.svg';

export default class view {


  
     _data;
   
  
      render(data){

        if(!data || (Array.isArray(data)&& data.length ===0)) return this.handdleError();
          this._data= data;
          const recipeHtml = this._returnHtml();
          this._clear()
          this._parentElement.insertAdjacentHTML('afterbegin',recipeHtml);
  
      }
  

      update(data) {
    this._data = data;
    const newMarkup = this._returnHtml();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log('💥', newEl.firstChild.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      // Updates changed ATTRIBUES
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

     _clear(){
    this._parentElement.innerHTML='';
      };
      

     

  
      handdleError(message = this._errorMessage){
          const errorHTML =`
            <div class="error">
              <div>
                <svg>
                  <use href="${icons}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${message}</p>
            </div> 
          `
           this._clear();
          this._parentElement.innerHTML='';
          this._parentElement.insertAdjacentHTML('afterbegin',errorHTML);
      };
  
     
       renderSpinner = function(){
        this._clear();
      const spanner =`
        <div class="spinner">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>



          </div> 
      `
     this._parentElement.innerHTML='';
       
      this._parentElement.insertAdjacentHTML('afterbegin',spanner);
  
     };

     renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._parentElement.innerHTML='';
    this._parentElement.insertAdjacentHTML('afterbegin', markup);


  


};
}