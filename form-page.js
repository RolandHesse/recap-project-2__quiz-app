//getting element(s) from html
const form = document.querySelector('[data-js="form"]');
const formfieldNewQuestion = document.querySelector(
  '[data-js="formfieldNewQuestion"]'
);
const formfieldNewAnswer = document.querySelector(
  '[data-js="formfieldNewAnswer"]'
);
const countParagraphQuestion = document.querySelector(
  '[data-js="countParagraphQuestion"]'
);
const countParagraphAnswer = document.querySelector(
  '[data-js="countParagraphAnswer"]'
);

//create event listener for getting data from form
form.addEventListener("submit", (event) => {
  //prevent default behavior of event listener
  event.preventDefault();

  // console.log("event: ", event);
  // console.log("event.target: ", event.target);

  // Read all entered data from the input fields
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // console.log("data: ", data);

  // Generate new DOM elements for a new card with createElement()
  const cardList = document.createElement("ul");
  cardList.classList.add("card-list");
  form.append(cardList);

  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");
  cardList.append(cardListItem);

  const newCard = document.createElement("article");
  newCard.classList.add("card");
  cardListItem.append(newCard);

  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("card__question");
  newQuestion.textContent = data.newAnswer;
  //newQuestion.textContent = formfieldNewQuestion.value;
  newCard.append(newQuestion);

  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("card__button-answer");
  showAnswerButton.setAttribute("data-js", "answer-button");
  showAnswerButton.type = "button";
  showAnswerButton.textContent = "Show Answer";
  newCard.append(showAnswerButton);

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("card__answer--active");
  newAnswer.setAttribute("data-js", "answer");
  newAnswer.textContent = data.newAnswer;
  //newAnswer.textContent = formfieldNewAnswer.value;
  newCard.append(newAnswer);

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");
  newCard.append(tagList);

  const tagListItem = document.createElement("li");
  tagListItem.classList.add("card__tag-list-item");
  tagListItem.textContent = data.tagField;
  tagList.append(tagListItem);

  const divButtonBookmark = document.createElement("div");
  divButtonBookmark.classList.add("card__button-bookmark");
  newCard.append(divButtonBookmark);

  const buttonBookmark = document.createElement("button");
  buttonBookmark.classList.add("bookmark");
  buttonBookmark.setAttribute("data-js", "bookmark-button");
  //buttonBookmark.setAttribute("aria-label", "bookmark");
  buttonBookmark.ariaLabel = "bookmark";
  buttonBookmark.type = "button";
  //buttonBookmark.textContent = svgBookmarkIcon;
  divButtonBookmark.append(buttonBookmark);

  const svgBookmarkIcon = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  svgBookmarkIcon.classList.add("bookmark__icon");
  svgBookmarkIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgBookmarkIcon.setAttribute("viewBox", "0 0 24 24");
  //svgBookmarkIcon.innerHTML = '<path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>';
  buttonBookmark.append(svgBookmarkIcon);

  const svgPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  svgPath.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );
  svgBookmarkIcon.append(svgPath);

  event.target.reset();
  event.target.elements[0].focus();
});

//create event listener for form field 1
formfieldNewQuestion.addEventListener("input", () => {
  const charactersRemainingQuestion = 150 - formfieldNewQuestion.value.length;
  countParagraphQuestion.textContent = `${charactersRemainingQuestion} characters remaining.`;
});

//create event listener for form field 2
formfieldNewAnswer.addEventListener("input", () => {
  const charactersRemainingAnswer = 150 - formfieldNewAnswer.value.length;
  countParagraphAnswer.textContent = `${charactersRemainingAnswer} characters remaining.`;
});
