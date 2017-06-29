document.addEventListener('DOMContentLoaded', () => {
  const vm = {};  
  vm.recipes = ko.observable();  
  fetch('http://localhost:3000/api/recipes')
    .then(result => result.json())
    .then(recipes => vm.recipes(recipes));    

  ko.applyBindings(vm);
});
