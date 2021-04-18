import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const { headline, authorPhoto, authorName } = article;
  
  const div = document.createElement('div');
  div.classList.add('card');

  const div2 = document.createElement('div');
  div2.classList.add('headline');
  div2.textContent = headline
  div.appendChild(div2);

  const div3 = document.createElement('div');
  div3.classList.add('author');
  div.appendChild(div3);

  const div4 = document.createElement('div');
  div4.classList.add('img-container');
  div3.appendChild(div4);

  const img = document.createElement('img');
  img.src = authorPhoto
  div4.appendChild(img);

  const span = document.createElement('span');
  span.textContent = `By ${authorName}`;
  div3.appendChild(span);

  return div;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(({res}) => {
    const {javascript, bootstrap, technology, jquery, node} = res.articles;
    javascript.map(element => {
      const select = document.querySelector(selector);
      select.appendChild(Card(element));
    });
    bootstrap.map(element => {
      const select = document.querySelector(selector);
      select.appendChild(Card(element));
    });
    technology.map(element => {
      const select = document.querySelector(selector);
      select.appendChild(Card(element));
    });
    jquery.map(element => {
      const select = document.querySelector(selector);
      select.appendChild(Card(element));
    });
    node.map(element => {
      const select = document.querySelector(selector);
      select.appendChild(Card(element));
    });
  })
}

export { Card, cardAppender }
