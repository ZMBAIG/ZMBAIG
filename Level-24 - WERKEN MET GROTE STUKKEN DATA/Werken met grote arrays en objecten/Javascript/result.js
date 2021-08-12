const sort_helper = (result) => {
  if (result) {
    return 1;
  } else {
    return -1;
  }
};

const keepUnique = (items, item) => {
  if (!Array.isArray(items)) items = [];
  if (!items.includes(item)) items.push(item);
  return items;
};

const getCountries = (personData) =>
  personData
    .map((person) => person.region)
    .reduce(keepUnique)
    .sort();

const emptyResultList = () =>
  (document.querySelector(".results").innerHTML = "");

const addToResultList = (li) =>
  document.querySelector(".results").appendChild(li);

const emptyButtonList = () =>
  (document.querySelector(".sub_buttons").innerHTML = "");

const addToButtonList = (button) =>
  document.querySelector(".sub_buttons").appendChild(button);

document.querySelectorAll("nav input").forEach((input) =>
  input.addEventListener("click", () => {
    emptyResultList();
    emptyButtonList();
  })
);
