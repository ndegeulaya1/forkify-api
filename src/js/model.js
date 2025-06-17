  import {async, keys} from 'regenerator-runtime';
  import { API_URL } from './config.js';
  import { getJSON } from './helper.js';
import { recipeView } from './views/recipeViews.js';

  
  export const state ={
    recipe:{},
    search:{
     results:[],
     query:{}
    },
    bookmarks:[]
  };



   export const loadResult = async function(query){
    try{
        state.search.query=query;
const data =await getJSON(`${API_URL}?search=${query}`);


  state.search.results = data.data.recipes.map(rec=>{
                return{ 
                    id: rec.id,
                  title: rec.title,
                  publisher: rec.publisher,
                  image: rec.image_url,
} 
  })


console.log(data);

    }
 catch(err){
    console.log(err);
    throw err;
 }
    
  }
 

  export const loadRecipe = async function(id){

    try{
        const data =await getJSON(`${API_URL}/${id}`);
          const { recipe } = data.data; // Destructuring
      
              state.recipe = {
                  id: recipe.id,
                  title: recipe.title,
                  publisher: recipe.publisher,
                  serving: recipe.servings,
                  cooking_time: recipe.cooking_time,
                  ingredients: recipe.ingredients,
                  sourceUrl: recipe.source_url,
                  image: recipe.image_url,
              };


              if(state.bookmarks.some(bookmark=>bookmark.id===id)){
                state.recipe.bookmarked=true;
              }
              else{
state.recipe.bookmarked=false;
              }
                  }

                  catch(err){
                    console.log(err);
                    throw err;
                  }
      
  } 

  export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.serving;
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
  });

  state.recipe.serving = newServings;
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
persistBookmarks();
 
};

//delete bookmark
export const deleteBookmark = function(id){
  const index = state.bookmarks.findIndex(el=>el.id===id);
  state.bookmarks.splice(index,1);


  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
}
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const loadBookmarks = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};


