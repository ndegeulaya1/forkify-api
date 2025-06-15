
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
          this._parentElement.innerHTML='';
          this._parentElement.insertAdjacentHTML('afterbegin',errorHTML);
      };
  
     
       renderSpinner = function(){
      const spanner =`
        <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div> 
      `
     this._parentElement.innerHTML='';
       
      this._parentElement.insertAdjacentHTML('afterbegin',spanner);
  
     };
  


}