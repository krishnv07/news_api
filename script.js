// NewsAPI Key
const apiKey = 'e91b68ebd42d44dbbfa064b9f6c88b36'; 
const url = 'https://newsapi.org/v2/everything?';

let currentQuery ="sports"
    let currentPage = 1;
    const fetchNews = async (page, q) => {
      console.log(`Fetching news for ${q}, page number ${page}...`);
      var url = 'https://newsapi.org/v2/everything?' +
        'q=' +q+
        '&from=2024-09-24&' +
        'pageSize=20&' +
        'language=en&' +
        'page=' + page +
        '&sortBy=popularity&' +
        'apiKey=c9c2b4234b6146b0bcaec95f876639d5';

      var req = new Request(url);

      let a = await fetch(req);
      let response = await a.json(); 
  
    let str = ""
      resultCount.innerHTML = response.totalResults
      for (let item of response.articles) {
        if (item.urlToImage && item.title && item.description) {

        str = str + `<div class="card" style="width: 18rem;">
          <img src="${item.urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.title.slice(0, 23)}...</h5>
            <p class="card-text">${item.description.slice(0, 50)}...</p><br>
          <a href="${item.url}" target="_blank" class="btn btn-info fixed-bottom">Read moreabout topic</a>
          </div>
        </div>`
      }
      document.querySelector(".content").innerHTML = str
    }
  }
    
    fetchNews(1, currentQuery) 
    search.addEventListener("click", (e)=>{
      e.preventDefault()
      let query = searchInput.value;
      currentQuery = query
      fetchNews(1,  query)
    })
    prev.addEventListener("click", (e)=>{
      e.preventDefault()
      if(currentPage>1){

        currentPage = currentPage - 1
        fetchNews(currentPage,  currentQuery)
      

      }
      
    });
    next.addEventListener("click", (e)=>{
      e.preventDefault()
      currentPage = currentPage + 1
      fetchNews(currentPage,  currentQuery)

    });

    
const userInput = (event) => {
  event.preventDefault();
  const category = event.target.getAttribute('data-category');
 // searchInput.value = category;  
  currentQuery = category;  
  fetchNews(1, currentQuery);  
};


document.querySelectorAll('.category-btn').forEach((button) => {
  button.addEventListener('click', userInput);
}); 
