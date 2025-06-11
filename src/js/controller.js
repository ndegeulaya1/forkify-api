
 import * as model from './model.js';
 import recipeView  from './views/recipeViews.js';
 import searchView from './views/searchView.js';





  const recipeContainer = document.querySelector('.recipe');



// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////


//handle navigation
function show(){
    const show=document.querySelector('.sidebar');
    show.style.display='flex';
  }
   function hide(){
    const hide= document.querySelector('.sidebar');
    hide.style.display='none'
   }

  


  

   ///api request

   const showRecipe = async function() {
    try {

      const id = window.location.hash.slice(1);
      if(!id) return;

        
   await model.loadRecipe(id);

   const {recipe} = model.state;

   //handle error
 recipeView.handdleError(recipeContainer);

   //spinner
recipeView.renderSpinner(recipeContainer);
      //load data 
      await model.loadRecipe(id);

      //render recipe
      recipeView.render(model.state.recipe)
         
   
    } catch(err) {
        console.error('Error:', err); // console.error is better for errors
        throw err; // Re-throw if you want calling code to handle it
    }
};

//control searcj result
const controlSearchResult = async function(){
  try{
    const query = searchView.getQuery();

    if(!query) return;
    await model.loadResult(query);

    console.log(model.state.search.results);
    console.log('hey')

  }
  catch(err){
    console.log(err)
    throw err;
  }
}



                

 const init = function(){
  recipeView.addRenderEvent(showRecipe);
  searchView.handleSearch(controlSearchResult);
     //handle error
 

 }
 init();
