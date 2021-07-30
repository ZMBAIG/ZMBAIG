//Deel 1 - Elementen toevoegen aan de DOM

const spottedAnimals = (event) => {
  console.log("spotted:", event.target.textContent);
  const spottedAnimal = event.target.textContent;
  const itemList = document.createElement("li");
  itemList.appendChild(document.createTextNode(spottedAnimal));
  const list = document.getElementById("spotted-animals-list");
  list.appendChild(itemList);
};
const removeFirstItem = () => {
  const firstItem = document.getElementById("spotted-animals-list").firstChild;
  firstItem.remove();
};

const removeAll = () => {
  const spottedAnimalsList = document.getElementById("spotted-animals-list");
  spottedAnimalsList.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", function () {
  const animalButtons = document.querySelectorAll(".big-five-button");
  animalButtons.forEach(function (animalButton) {
    animalButton.addEventListener("click", spottedAnimal);
  });

  const removeFirstItemButton = document.getElementById(
    "remove-first-item-button"
  );
  removeFirstItemButton.addEventListener("click", removeFirstItem);

  const removeAllButton = document.getElementById("remove-all-button");
  removeAllButton.addEventListener("click", removeAll);
});
