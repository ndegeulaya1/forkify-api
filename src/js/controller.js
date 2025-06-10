const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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

   console.log('hellow');


   ///api request

   const showRecipe = async function(){
    try{
      const res = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886');
      const data= await res.json();
      
      if(res.ok) throw new Error(`${data.message} ${res.status}`)
      
      
      console.log(res,data);
    } catch{
      console.log(err);
    }


   };

   showRecipe();