  function onReady() {

  // array of to-dos
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm'); // this line access html form

    // this function updates the to-dos arrays
    function createNewToDo() {

    // access the text input to get the text people enter
    const newToDoText = document.getElementById('newToDoText');

    // prevent user to submit empty to-do items
      if (!newToDoText.value) { return; }

    // add the new to-do to the array
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    // clear text input (courtesy to the user :-)
    newToDoText.value = '';

    // renderTheUI from createNewToDo
    renderTheUI(); {


    // event listerner
    addToDoForm.addEventListener('submit', event => {
      event.preventDefault(); // prevents page from reloading
      createNewToDo();
  });
}
  //function to create the ui
    renderTheUI();
      const toDolist = document.getElementById('toDoList'); // access <ul> in html

      // set <newLi> to an empty string
      toDoList.textContent = '';

      // array method to render each to-do as <li> in the <ul>
      toDos.forEach(function(toDo) {

        // <li> and checkbox
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox"; // tells the 'input' what kind

        // add title text to newLi
        newLi.textContent = toDo.title;

        // update the dom
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
      });

    }



  window.onload = function() {
    onReady();
};
