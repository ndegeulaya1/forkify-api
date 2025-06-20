import view from "./view.js";
import icons from '../../img/icons.svg';

class addRecipeView extends view{
_parentElement = document.querySelector('.upload');
_overlay = document.querySelector('.overlay');
_window = document.querySelector('.add-recipe-window');
_btnClose = document.querySelector('.btn--close-modal');
_btnOpen = document.querySelector('.nav__btn--add-recipe');
_message =-'recipe uploded succesful'


constructor(){
    super();
    this._addHandleShow();
    this._addHandleHide();
}

toogleWindow(){
this._window.classList.toggle('hidden');
       this._overlay.classList.toggle('hidden');
}
_addHandleShow(){
    this._btnOpen.addEventListener('click',this.toogleWindow.bind(this))
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
