 export class searchView{

    #parentEL = document.querySelector('.search');

    getQuery(){
        const query= this.#parentEL.querySelector('.search__field').value;
        this.#clearInput();
        return query;
    };
      

    #clearInput(){
        this.#parentEL.querySelector('.search__field').value='';
    }
    handleSearch(handle){
        this.#parentEL.addEventListener('submit',function(e){
            e.preventDefault();
            handle();
        })
    };

  }

  export default new searchView();