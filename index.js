// const $ = document.querySelector.bind(document);

// document.addEventListener('DOMContentLoaded', () => {
//   const userNameLabel = $('#user-name');
//   const userNameInput = $('#user-name-input');
//   const changeNameButton = $('#change-name-btn');

//   function changeName() {
//     userNameLabel.textContent = userNameInput.value;
//   }

//   changeNameButton.addEventListener('click', changeName);
// });
document.addEventListener('DOMContentLoaded', () => {
  let ViewModel = function() {
    this.userName = ko.observable("world"); 
    this.userNameInput = ko.observable("");

    this.changeName = function() { 
      this.userName(this.userNameInput());
    }; 
  }

  ko.applyBindings(new ViewModel());
});
