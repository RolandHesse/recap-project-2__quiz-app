//getting element(s) from html
const form = document.querySelector('[data-js="form"]');

//create event listener
form.addEventListener("submit", (event) => {
  //prevent default behavior of event listener
  event.preventDefault();

  // Read all entered data from the input fields
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Generate new DOM element for a card with createElement()
  const newCard = document.createElement("ul");

  //Insert the form's data as text into the DOM elements
  newCard.innerHTML = `<li class="card-list__item">
          <article class="card">
            <h2 class="card__question">
              ${data.newQuestion}
            </h2>
            <button
              class="card__button-answer"
              data-js="answer-button"
              type="button"
            >
              Show answer
            </button>
            <p class="card__answer card__answer--active" data-js="answer">${data.newAnswer}</p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">#${data.tagField}</li>
            </ul>
            <div class="card__button-bookmark">
              <button
                class="bookmark"
                data-js="bookmark-button"
                aria-label="bookmark"
                type="button"
              >
                <svg
                  class="bookmark__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </button>
            </div>
          </article>
        </li>`;

  //Add style to newly created card
  newCard.classList.add("card-list");

  //Append the card to the page, directly below the form
  form.append(newCard);
});

//Old stuff with A LOT of new elements (didn't work)
//  //Generate all DOM element for a card with createElement()
//  const liElementCard = document.createElement("li");
//  const articleElement = document.createElement("article");
//  const h2Element = document.createElement("h2");
//  const buttonElementShowAnswer = document.createElement("button");
//  const pElementAnswer = document.createElement("p");
//  const ulElementTags = document.createElement("ul");
//  const liElementTags = document.createElement("li");
//  const divElementBookmarkButton = document.createElement("div");
//  const buttonElementBookmarkButton = document.createElement("button");
//  const svgElementBookmarkIcon = document.createElement("svg");
//  const svgElementSvgPath = document.createElement("path");

//  //Add styles to newly created elements
//  liElementCard.classList.add("card-list__item");
//  articleElement.classList.add("card");
//  h2Element.classList.add("card-question");
//  buttonElementShowAnswer.classList.add("card__button-answer");
//  pElementAnswer.classList.add("card__answer");
//  ulElementTags.classList.add("card__tag-list");
//  liElementTags.classList.add("card__tag-list-item");
//  divElementBookmarkButton.classList.add("card__button-bookmark");
//  buttonElementBookmarkButton.classList.add("bookmark");
//  svgElementBookmarkIcon.classList.add("bookmark__icon");

//  //Insert the form's data as text into the DOM elements
//  h2Element.textContent = `${data.newQuestion}`;
//  pElementAnswer.textContent = `${data.newAnswer}`;
//  liElementTags.textContent = `#${tagField}`;

//  //Group elements together
//  liElementCard.append(articleElement);
//  articleElement.append(h2Element, buttonElementShowAnswer, pElementAnswer, ulElementTags, divElementBookmarkButton);
//  ulElementTags.append(liElementTags);
//  divElementBookmarkButton.append(buttonElementBookmarkButton);
//  buttonElementBookmarkButton.append(svgElementBookmarkIcon);
//  svgElementBookmarkIcon.append(svgElementSvgPath);
