
 import * as model from './model.js';
 import recipeView  from './views/recipeViews.js';
import resultView from './views/resultView.js';
 import searchView from './views/searchView.js';





  const recipeContainer = document.querySelector('.recipe');



// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////



  


  

   ///api request

   const showRecipe = async function() {
    try {
  
      const id = window.location.hash.slice(1);
      if(!id) return;

        //controlServings(8);
   await model.loadRecipe(id);

   const {recipe} = model.state;

   //handle error
 recipeView.handdleError(recipeContainer);

   //spinner for recipe view
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

//control search result
const controlSearchResult = async function(){
  try{

    //spinner for result view
   
      resultView.renderSpinner();
 

    const query = searchView.getQuery();

    if(!query) return;
    await model.loadResult(query);


    //render the data 
    resultView.render(model.state.search.results)
    console.log(model.state.search.results);
    console.log('hey')

  }
  catch(err){
    console.log(err)
    throw err;
  }
}

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  recipeView.render(model.state.recipe);
};

                

 const init = function(){
  recipeView.addRenderEvent(showRecipe);
  searchView.handleSearch(controlSearchResult);
    recipeView.addHandlerUpdateServings(controlServings);
     //handle error
     
 

 }
 init();
