// //Maak in de api-client.js de variabele API_KEY aan met jouw API key als waarde.
// Declareer een asynchronous functie getData() met het async keyword
// In deze functie, voeg een const variabele toe genaamd apiUrl en geef deze de waarde van het endpoint dat je wilt aanspreken. In ons geval hebben we nu gekozen voor het "genres"-endpoint van demoviedb. Die ziet er zo uit: https://api.themoviedb.org/3/genre/movie/list
// Gebruik de fetch() functie met de GET methode om de data van de API te fetchen. Stop de fetch functie in een variable res die je await. De code gaan dus niet verder totdat de await klaar is.
// Voeg standaard HTML pagina to aan je index.html en connect de javascript file api-client.js file met een script tag.

const API_KEY = "My API key";
const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";

const getData = async () => {
  // api.themoviedb.org/3/genre/movie/list?api_key=jouwkeyhier
  const APIEndpoint = `${apiUrl}/genre/movie/list?api_key=${API_KEY}`;
  try {
    const res = await fetch(APIEndpoint, { method: "GET" });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
