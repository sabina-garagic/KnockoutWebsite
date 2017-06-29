const $ = document.querySelector.bind(document);

document.addEventListener('DOMContentLoaded', () => {
  const userNameLabel = $('#user-name');
  const userNameInput = $('#user-name-input');
  const changeNameButton = $('#change-name-btn');

  function changeName() {
    userNameLabel.textContent = userNameInput.value;
  }

  changeNameButton.addEventListener('click', changeName);
});
