
 import * as model from './model.js';
 import recipeView  from './views/recipeViews.js';
import resultView from './views/resultView.js';
import bookmarkView from './views/bookmarkView.js';
 import searchView from './views/searchView.js';
import addRecipeView from './views/addRecipe.js';






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
      bookmarkView.update(model.state.bookmarks)
      

   
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


const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarkView.render(model.state.bookmarks);
};
    
 const init = function(){
  recipeView.addRenderEvent(showRecipe);
  searchView.handleSearch(controlSearchResult);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);

 model.loadBookmarks();
 
 //handle error
     
  bookmarkView.render(model.state.bookmarks);


 

 }
 init();
