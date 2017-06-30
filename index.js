document.addEventListener('DOMContentLoaded', () => {
  const vm = {};
  vm.recipes = ko.observable();
  vm.recipeName = ko.observable();
  vm.recipeInstructions = ko.observable();

  const loadList = () => {
    fetch('http://localhost:3000/api/recipes')
      .then(result => result.json())
      .then(recipes => vm.recipes(recipes));
  }
  loadList();

  vm.addRecipe = () => {
    fetch('http://localhost:3000/api/recipes',
      {
        method: "POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `name=${vm.recipeName()}&instructions=${vm.recipeInstructions()}`
      })
      .then(result =>
        result.json())
      .then(recipe => {
        loadList();
        console.log(recipe);
      })
  }

  vm.deleteRecipe = recipe => {
    fetch(`http://localhost:3000/api/recipes/${recipe._id}`,
      {
        method: "DELETE",
      })
      .then(result => result.json())
      .then(recipe => {
        loadList();
        console.log(recipe);
      })
  }

  vm.updateRecipe = (recipe) => {

    fetch(`http://localhost:3000/api/recipes/${recipe._id}`,
      {
        method: "PUT",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `name=${recipe.name}&instructions=${recipe.instructions}`
      })
      .then(result => result.json())
      .then(recipe => {
        loadList();
        console.log(recipe);
      })

  }

  ko.applyBindings(vm);
});
