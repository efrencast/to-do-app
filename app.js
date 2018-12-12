function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm'); // access the html form

  //function createNewToDo
function createNewToDo() {
  const newToDoText = document.getElementById('newToDoText');
  if (!newToDoText.value) { return; } // prevents submit empty
  toDos.push({
    title: newToDoText.value,
    complete: false
  });
  newToDoText.value = ''; // clears text for the user

  renderTheUI(); // when state changes ui gets updated
}
  // end of function createNewToDo

 // function to render the ui
function renderTheUI() {
  const toDoList = document.getElementById('toDoList'); // access the <ul> in html

  toDoList.textContent = ''; // set newLi to an empty string

  toDos.forEach(function(toDo){ // takes function & applies it to each item in array
    const newLi = document.createElement('li'); // creates ui for li and checkbox
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    newLi.textContent = toDo.title; // add the toDo title text to newLi

    toDoList.appendChild(newLi); // updated dom
    newLi.appendChild(checkbox); // updated dom
  });
} // end of function renderTheUI


  // event listener
addToDoForm.addEventListener('submit', event => {
  event.preventDefault(); // prevents page reload
  createNewToDo();
});
 // end event listener

 // function to CALL the render the ui
renderTheUI();


} // end of funtion onReady

// last function
  window.onload = function() {
    onReady();
};
