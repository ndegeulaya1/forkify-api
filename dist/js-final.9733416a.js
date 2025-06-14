const state = {
    recipes: [],
    resultsPerPage: 10,
    currentPage: 1
};
const fetchRecipes = async function(query) {
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`);
        const data = await res.json();
        return data.data.recipes;
    } catch (err) {
        console.error('Failed to fetch:', err);
    }
};
const getRecipesByPage = function(page = state.currentPage) {
    state.currentPage = page;
    const start = (page - 1) * state.resultsPerPage;
    const end = page * state.resultsPerPage;
    return state.recipes.slice(start, end);
};
const renderRecipes = function(recipes) {
    const container = document.querySelector('.recipes-container');
    container.innerHTML = '';
    recipes.forEach((recipe)=>{
        const html = `
      <div class="recipe">
        <h3>${recipe.title}</h3>
        <img src="${recipe.image_url}" alt="${recipe.title}" />
      </div>
    `;
        container.insertAdjacentHTML('beforeend', html);
    });
};
const updatePaginationButtons = function() {
    const prevBtn = document.querySelector('.pagination__btn--prev');
    const nextBtn = document.querySelector('.pagination__btn--next');
    const totalPages = Math.ceil(state.recipes.length / state.resultsPerPage);
    // Update button labels
    prevBtn.querySelector('span').textContent = `Page ${state.currentPage - 1}`;
    nextBtn.querySelector('span').textContent = `Page ${state.currentPage + 1}`;
    // Show/Hide buttons based on current page
    prevBtn.classList.toggle('hidden', state.currentPage === 1);
    nextBtn.classList.toggle('hidden', state.currentPage === totalPages);
};
const handlePaginationClick = function() {
    document.querySelector('.pagination').addEventListener('click', function(e) {
        const prev = e.target.closest('.pagination__btn--prev');
        const next = e.target.closest('.pagination__btn--next');
        const totalPages = Math.ceil(state.recipes.length / state.resultsPerPage);
        if (prev && state.currentPage > 1) state.currentPage--;
        else if (next && state.currentPage < totalPages) state.currentPage++;
        else return;
        renderRecipes(getRecipesByPage());
        updatePaginationButtons();
    });
};
const init = async function() {
    const allRecipes = await fetchRecipes('pizza');
    state.recipes = allRecipes;
    renderRecipes(getRecipesByPage(1));
    updatePaginationButtons();
    handlePaginationClick();
};
init();

//# sourceMappingURL=js-final.9733416a.js.map
