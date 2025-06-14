  import {async, keys} from 'regenerator-runtime';
  import { API_URL } from './config.js';
  import { getJSON } from './helper.js';
import { recipeView } from './views/recipeViews.js';
  
  export const state ={
    recipe:{},
    search:{
     results:[],
     query:{}
    }
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
                  }

                  catch(err){
                    console.log(err);
                    throw err;
                  }
      
  } 


