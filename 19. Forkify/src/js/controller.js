import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';


import '../../node_modules/core-js/stable';
import 'regenerator-runtime/runtime'

// if(module.hot) {
//   module.hot.accept();
// }

const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
 
const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);


   // 2) Rendering recipe
   recipeView.render(model.state.recipe);

  } catch(err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();

    // 1. Get search query
    const query = searchView.getQuery();
    if(!query) return;
    

    // 2. Load search results
   await model.loadSearchResults(query);

   // 3. Render results
  //  resultsView.render(model.state.search.results);
  resultsView.render(model.getSearchResultsPage());

  //4. Render initial pagination buttons
  paginationView.render(model.state.search)

  } catch(err) {
    console.log(err);
  }
};


const controlPagination = function(goToPage) {
  // 3. Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //4. Render NEW pagination buttons
  paginationView.render(model.state.search)
}

const controlServings = function(newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings)

  // Update the recipeView
  recipeView.render(model.state.recipe);
}


const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
}
init();