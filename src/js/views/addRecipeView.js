import view from "./view.js";
import icons from 'url:../../img/icons.svg';


class addRecipeView extends view{
_parentElement = document.querySelector('.upload');
_overlay = document.querySelector('.overlay');
_window = document.querySelector('.add-recipe-window');
_btnClose = document.querySelector('.btn--close-modal');
_btnOpen = document.querySelectorAll('.nav__btn--add-recipe');
_message ='recipe uploded succesful'


constructor(){
    super();
     this._btnOpen = document.querySelectorAll('.nav__btn--add-recipe');
    this._addHandleShow();
    this._addHandleHide();
}

clearForm() {
  this._parentElement.reset();
}

clearMessages() {
  const messages = this._parentElement.querySelectorAll('.message, .error');
  messages.forEach(msg => msg.remove());
}

      

toogleWindow(){
 
this._window.classList.toggle('hidden');
       this._overlay.classList.toggle('hidden');
        
      
}
_addHandleShow() {
  
  this._btnOpen.forEach(btn =>
    btn.addEventListener('click', this.toogleWindow.bind(this))
  );
    
}


_addHandleHide(){
 
    this._btnClose.addEventListener('click',this.toogleWindow.bind(this))
}



addHandleUpload(handle){
    
    this._parentElement.addEventListener('submit',function(e){
        e.preventDefault();
        const formData = [...new FormData(this)];
        const data = Object.fromEntries(formData);
   
        handle(data);
    })
  
}

_returnHtml(){

  

    return this._data.map(this._returnHtmlPreview).join('');
  
   
}
 _returnHtmlPreview(result){

 }

   
}

export default new addRecipeView();
