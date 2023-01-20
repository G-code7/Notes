const noteInput = document.getElementById("note-input");
const addButton = document.getElementById("add-button");
const noteList = document.getElementById("note-list");

// addButton.addEventListener('keypress' enter)

addButton.addEventListener("click", function(e) {
  e.preventDefault();
  const note = noteInput.value;
  if (note.trim() === "") {
    return;
  }
  addNote(note);
});

function addNote(note) {
  const noteItem = document.createElement("li");
  noteItem.classList.add("note");
  noteItem.innerHTML = note;
  noteList.appendChild(noteItem);
  noteInput.value = "";
}


noteList.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("underline");
  }
});
