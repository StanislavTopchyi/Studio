//-------------------------------- GO TO MODAL WINDOW --------------------------------
const callBack = document.querySelector(".callback");
const firstLesson = document.querySelector(".first-lesson");
callBack.addEventListener("click", function(event) {
  event.preventDefault();
  callbackField.style.display = "flex";
});
firstLesson.addEventListener("click", function(event) {
    event.preventDefault();
    callbackField.style.display = "flex";
  });

//-------------------------------- GO BACK FROM MODAL WINDOW --------------------------
const callbackField = document.querySelector(".callback-field");
document.addEventListener("mouseup", function(event) {
  if (event.target == callbackField) {
    callbackField.style.display = "none";
  }
});
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    callbackField.style.display = "none";
  }
});
