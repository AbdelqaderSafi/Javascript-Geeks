const search = document.getElementById("search");
const lis = document.getElementById("lis");
const errorMessage = document.getElementById("errorMessage");
let quotes = [];

fetch("https://dummyjson.com/quotes")
  .then((response) => {
    if (!response.ok) throw new Error("response not ok");
    return response.json();
  })
  .then((data) => {
    quotes = data.quotes;
    displayQuotes(quotes);
  })
  .catch((error) => {
    errorMessage.textContent =
      "Sorry, we couldn't retrieve the quotes. Try again later.";
    console.error(error);
  });

function displayQuotes(quoteArray) {
  lis.innerHTML = "";
  quoteArray.forEach((quote) => {
    const li = document.createElement("li");
    li.textContent = quote.quote;
    lis.appendChild(li);
  });
}

search.addEventListener("input", () => {
  const searchTerm = search.value.toLowerCase();
  const filteredQuotes = quotes.filter((q) =>
    q.quote.toLowerCase().includes(searchTerm)
  );
  displayQuotes(filteredQuotes);
});
