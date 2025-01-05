const buttons = document.querySelectorAll("button");
const articles = document.querySelectorAll("article");

buttons.forEach((button) => button.addEventListener("click", selectPost));

function selectPost(e) {
  const target = this;
  const parent = target.parentNode.parentNode;
  const icon = target.children[0];

  if (parent.dataset.select == "active") {
    parent.dataset.select = "";
    addAndRemoveClass("bi-heart-fill", "bi-heart", icon);
  } else {
    parent.dataset.select = "active";
    addAndRemoveClass("bi-heart", "bi-heart-fill", icon);
  }
}

function addAndRemoveClass(classToRemove, classToAdd, element) {
  element.classList.add(classToAdd), element.classList.remove(classToRemove);
}
