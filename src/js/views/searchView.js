 export class searchView{

    _parentEL = document.querySelector('.search');

    getQuery(){
        const query= this._parentEL.querySelector('.search__field').value;
        this._clearInput();
        return query;
    };
      

    _clearInput(){
        this._parentEL.querySelector('.search__field').value='';
    }
    handleSearch(handle){
        this._parentEL.addEventListener('submit',function(e){
            e.preventDefault();
            handle();
        })
    };

  }

  export default new searchView();