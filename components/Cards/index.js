// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function Card(dataArg) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const byAuthor = document.createElement('span');
    
    card.append(headline);
    card.append(author);
    author.append(imgContainer);
    imgContainer.append(img);
    author.append(byAuthor);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = dataArg.headline;
    img.src = dataArg.authorPhoto;
    byAuthor.textContent = `By ${dataArg.authorName}`;

   
    return card;
}

const cards = document.querySelector('.cards-container');
// console.log(Card())

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    
    const arr = Object.keys(response.data.articles);
    // console.log(response.data.articles[arr[0]]);
    // console.log(arr);
    // console.log(arr[0]);
    
    arr.forEach(key => {
        // console.log(response.data.articles[key]);
        const keys = (response.data.articles[key]);
        keys.forEach(dataArg => {
            cards.append(Card(dataArg));
        })
    })
}).catch(error => {
    console.log(error);
})