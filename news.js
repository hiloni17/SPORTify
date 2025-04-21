const API_KEY = "c5dc1382722d4d3f9cf912a982e528a2";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("ipl"));

//Fetches the news from the API
async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
  bindData(data.articles);
}

//Binds the data to the card (which is in template-news-card)
function bindData(article){
  const cardsContainer = document.getElementById("cards-container");
  const newsCardTemplate = document.getElementById("template-news-card");

  cardsContainer.innerHTML = '';
  //Adds the news card to the container
  article.forEach((article) => {
    if(!article.urlToImage) return;
    const cardClone = newsCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, article);
    cardsContainer.appendChild(cardClone);
  });
}

//Fills the data in the card
function fillDataInCard(cardClone, article){
  const  newsImg = cardClone.querySelector("#news-img");
  const  newsTitle = cardClone.querySelector("#news-title");  
  const  newsSource = cardClone.querySelector("#news-source");  
  const  newsDesc = cardClone.querySelector("#news-desc");

  newsImg.src = article.urlToImage;
  newsTitle.innerHTML = article.title;
  newsDesc.innerHTML = article.description;

  //Converts the date to the local timezone
  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  newsSource.innerHTML = `${article.source.name} ∘ ${date}`;

  //Opens the article in a new tab
  cardClone.firstElementChild.addEventListener("click", () => {
    window.open(article.url, "_blank");
  });
}

// Function to handle search
function handleSearch() {
  const query = searchText.value.trim();
  if(!query) return;
  fetchNews(query);
  
  // Scroll to results after a short delay to allow content to load
  setTimeout(() => {
    const cardsContainer = document.getElementById("cards-container");
    if (cardsContainer) {
      const headerOffset = 100;
      const elementPosition = cardsContainer.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 500);
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-input");

// Add click event listener
searchButton.addEventListener("click", handleSearch);

// Add enter key event listener
searchText.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});