function onReady(){
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm'); // access the html form

  //function createNewToDo
  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    newToDoText.value = ''; // clears text for the user
    id++;

    renderTheUI(); // when state changes ui gets updated
  }

  // function to render the ui
  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = ''; // set newLi to an empty string

    toDos.forEach(function(toDo){ // takes function & applies it to each item in array
      const newLi = document.createElement('li'); // creates ui for li and checkbox
      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title; // add the toDo title text to newLi

        // delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // event listener
        deleteButton.addEventListener('click',()  => {
          toDos = toDos.filter(toDos => toDo.id != toDos.id);
          renderTheUI();
        })

        toDoList.appendChild(newLi); // updated dom with li
        newLi.appendChild(checkbox); // updated dom with checkbox
        newLi.appendChild(deleteButton); // updated dom with delete button

    });

  }

  // event listener
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  })

};

window.onload = function() {
  onReady();
};
