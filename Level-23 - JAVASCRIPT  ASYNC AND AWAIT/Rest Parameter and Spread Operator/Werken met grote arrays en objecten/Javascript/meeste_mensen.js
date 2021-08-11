// Subopdracht: meeste mensen - 3 punten
// Maak een lijst van alle landen die voorkomen in de data.
// Achter elk land moet komen te staan hoeveel van de mensen in de lijst in dat land wonen.
// De lijst moet zo gesorteerd zijn dat de landen met de meeste mensen bovenaan staan.

const getCountriesWithCongestedPeople = (personData) => {
  let countries = {};

  personData.forEach(({ region }) => {
    if (region in countries) {
      countries[region]++;
    } else {
      countries[region] = 1;
    }
  });

  countries = Object.entries(countries);
  countries = countries.map((country) => ({
    country: country[0],
    inhabitants: country[1],
  }));

  countries.sort((country1, country2) =>
    sort_helper(country1.inhabitants < country2.inhabitants)
  );
  return countries;
};

const generateCountryAndInhabitantsHTML = ({ country, inhabitants }) => {
  const li = document.createElement("li");
  li.innerHTML = `${country} - ${inhabitants}`;
  return li;
};

const displayCountriesSortedByPeople = () =>
  getCountriesWithCongestedPeople(randomPersonData)
    .map(generateCountryAndInhabitantsHTML)
    .forEach(addToResultList);

document
  .querySelector(".countries_most_people")
  .addEventListener("click", displayCountriesSortedByPeople);
