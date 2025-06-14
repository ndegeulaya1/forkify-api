
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