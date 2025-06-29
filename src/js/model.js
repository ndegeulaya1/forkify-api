  import {async, keys} from 'regenerator-runtime';
  import { API_URL, KEY } from './config.js';
  import { getJSON, sendJSON } from './helper.js';
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
const data =await getJSON(`${API_URL}?search=${query}&key=${KEY}`);


  state.search.results = data.data.recipes.map(rec=>{
                return{ 
                    id: rec.id,
                  title: rec.title,
                  publisher: rec.publisher,
                  image: rec.image_url,
                   ...(rec.key && { key: rec.key }),
} 
  })


console.log(data);

    }
 catch(err){
    console.log(err);
    throw err;
 }
    
  }
 

  const createRecipe = function(data){
         const { recipe } = data.data; // Destructuring
      
             return {
                  id: recipe.id,
                  title: recipe.title,
                  publisher: recipe.publisher,
                  serving: recipe.servings,
                  cooking_time: recipe.cooking_time,
                  ingredients: recipe.ingredients,
                  sourceUrl: recipe.source_url,
                  image: recipe.image_url,
                   ...(recipe.key && { key: recipe.key }),
              };
  }

  export const loadRecipe = async function(id){

    try{
        const data =await getJSON(`${API_URL}/${id}`);
     
state.recipe = createRecipe(data);

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



//receive data for the new arecipe
export const uploadRecipe = async function (newRecipe) {

  //Extracting and Processing Ingredients
  const ingredients = Object.entries(newRecipe)

   //Filtering Ingredient Fields
    .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')

    // Mapping and Destructuring Values
    .map(ing => {
      const ingArr = ing[1].replaceAll(' ', '').split(',');

   


     
        const [quantity, unit, description] = ingArr;

      //Creating Ingredient Objects
      return {
        quantity: quantity ? Number(quantity) : null,
        unit,
        description,
      };
    });

 

  const recipe = {
   
                  title: newRecipe.title,
                  publisher: newRecipe.publisher,
                  servings: newRecipe.servings,
                  cooking_time: newRecipe.cookingTime,
                  ingredients,
                  source_url: newRecipe.sourceUrl,
                  image_url: newRecipe.image,
  }

  const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);
   console.log(data);
   state.recipe = createRecipe(data);
   addBookmark(state.recipe)

};

