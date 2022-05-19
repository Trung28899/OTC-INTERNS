/*
  FOLDER RESPONSIBLE FOR OPENING AND CLOSING BACKDROP & MODAL
*/

const editButton = document.querySelector(".fa-edit");
const backDrop = document.querySelector(".backDrop");
const modal = document.querySelector(".modal");

function editClicked() {
  backDrop.classList.add("active");
  modal.classList.add("active");
}

function editClosed() {
  backDrop.classList.remove("active");
  modal.classList.remove("active");
}

// When the edit button is clicked, show the backdrop and modal
editButton.addEventListener("click", editClicked);
// When the model is clicked, backdrop and modal will be closed
backDrop.addEventListener("click", editClosed);
